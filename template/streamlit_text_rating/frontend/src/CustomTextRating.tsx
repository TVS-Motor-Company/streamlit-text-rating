import { BaseProvider, LightTheme } from "baseui"
import React from "react"
import IconButton from "@material-ui/core/IconButton"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import {
  withStreamlitConnection,
  StreamlitComponentBase,
  Streamlit,
} from "streamlit-component-lib"


interface State {
 hasClickedLike: boolean,
 hasClickedDislike: boolean,
}

class streamlit_text_rating extends StreamlitComponentBase<State> {
  public state = {hasClickedLike: false,hasClickedDislike: false}

  public render = (): React.ReactNode => {

    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    const style: React.CSSProperties = {}

    const text = this.props.args["text"] as string
    const color_text = this.props.args["color_text"] as string
    const color_background = this.props.args["color_background"] as string
    const font_size = this.props.args['font_size'] as string
    const font_family = this.props.args['font_family'] as string
    const font_weight=this.props.args['font_weight'] as number

    return (
          <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start',width:'100%',margin:'0px',}}>
          <p
          style={{color:color_text,
          background:color_background,
          fontSize:font_size,
          fontWeight:font_weight,
          marginBottom:'0px',
          fontFamily:font_family,
          padding:'-6px',
          borderRadius:'6px',}}>
          <li>{text}</li>
          </p>
            <IconButton onClick={this.onClickedLike} style={{outline:'none',paddingTop:'0px',paddingBottom:'0px'}}>
              <ThumbUpIcon color={this.state.hasClickedLike?'success':'disabled'}/>
            </IconButton>

            <IconButton onClick={this.onClickedDislike} style={{outline:'none',paddingTop:'0px',paddingBottom:'0px'}} >
              <ThumbDownIcon color={this.state.hasClickedDislike?'error':'disabled'}/>
            </IconButton>
          </div>
    )
  }

  private onClickedLike = (): void => {
    this.setState(
        prevState => ({hasClickedLike: ! this.state.hasClickedLike}),
      () => {if (this.state.hasClickedLike) {Streamlit.setComponentValue('liked');} else {Streamlit.setComponentValue('None');}}
      );
       this.setState(
        prevState => ({hasClickedDislike: false})
      );
  }

  private onClickedDislike = (): void => {
    this.setState(
        prevState => ({hasClickedDislike: ! this.state.hasClickedDislike}),
      () => {if (this.state.hasClickedDislike) {Streamlit.setComponentValue('disliked');} else {Streamlit.setComponentValue('None');}}
      );
       this.setState(
        prevState => ({hasClickedLike: false})
      );
    }
}

export default withStreamlitConnection(streamlit_text_rating)
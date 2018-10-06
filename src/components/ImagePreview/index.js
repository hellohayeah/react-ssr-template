import React, { Component } from 'react'
import './style.scss'

class ImagePreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: '',
      file: null
    }
  }

  onChangeImg = e => {
    const file = e.target.files.item(0)
    const reader = new FileReader()

    reader.addEventListener('load', this.onImageLoad)
    reader.readAsDataURL(file)

    this.setState({ file })
  }

  onImageLoad = e => {
    this.setState({ img: e.target.result })
  }

  render() {
    const { img } = this.state

    return (
      <div className="image-preview">
        <input type="file" onChange={this.onChangeImg} />
        {img === '' ? null : <img src={img} width="300" alt="preview" />}
      </div>
    )
  }
}

export default ImagePreview

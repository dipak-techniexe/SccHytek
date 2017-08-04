import * as React from 'react';
import * as ReactDOM from "react-dom"
import './gallery.scss'

interface IGalleryProps{
  images: any
  startIndex?: number
}

export class PopGallery extends React.Component<IGalleryProps, any> {
  // modalDiv: HTMLDivElement
  constructor(props: IGalleryProps) {
    super(props)
    this.state = {
      images: this.props.images,
      index: this.props.startIndex || 1 
    }
  }

  closeModal = () => {
    const node = ReactDOM.findDOMNode(this).parentElement
    if (node !== null) {
      ReactDOM.unmountComponentAtNode(node)
    }    
  }

  nextSlide = () => {
    var next = this.state.index + 1;
     next > this.props.images.length ? next = 1 : ''
    this.setState((prevState) => ({ index: next }))
  }

  prevSlide = () => {
    var next = this.state.index - 1;
     next < 1 ? next = this.props.images.length : ''
    this.setState((prevState) => ({ index: next }))
  }

  render() {
    return (
      <div id="myModal" className={`modal show`} >
        <span className="close cursor" onClick={this.closeModal}>&times;</span>
        <div className="modal-content">
          {
              this.props.images.length > 0 ? this.props.images.map((i:any)=> <div key={i.id} className={`mySlides ${this.state.index === i.id ? 'show' : 'hide'}`} >
                  <img src={require(`Images/${i.url}`)} />
              </div>) : ''
          }
          <a className="prev" onClick={()=>this.prevSlide()}>&#10094;</a>
          <a className="next" onClick={()=>this.nextSlide()}>&#10095;</a>
          {
              this.state.images.length > 0 ? this.state.images.map((i:any)=> <div key={i.id} className={`caption-container ${this.state.index === i.id ? 'show' : 'hide'}`} >
                  <p>{i.caption}</p>
              </div>) : ''
          }
        </div>
      </div>
    );
  }
}



export default PopGallery;

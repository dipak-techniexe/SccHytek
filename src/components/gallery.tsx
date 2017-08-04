import * as React from 'react';
import Sidebar from './comman/sidebar'
//import DocumentMeta from 'react-document-meta';
import MainSlider from './comman/slider'
import PopGallery from './pop-gallery/gallery'
import * as ReactDOM from 'react-dom'
const Dynamic = require('./dynamic.json')

export interface GalleryProps {
}

class Gallery extends React.Component<GalleryProps, any> {
    constructor(){
		super()
		this.state={
		act: '',images: [{
        "id": 1,
        "url": "Image1.png",
        "caption": "First Caption"
      }, {
        "id": 2,
        "url": "Image2.png",
        "caption": "Second Caption"
      }, {
        "id": 3,
        "url": "Image3.png",
        "caption": "Third Caption"
      },{
        "id": 4,
        "url": "Image1.png",
        "caption": "First Caption"
      }, {
        "id": 5,
        "url": "Image2.png",
        "caption": "Second Caption"
      }, {
        "id": 6,
        "url": "Image3.png",
        "caption": "Third Caption"
      },{
        "id": 7,
        "url": "Image1.png",
        "caption": "First Caption"
      }, {
        "id": 8,
        "url": "Image2.png",
        "caption": "Second Caption"
      }, {
        "id": 9,
        "url": "Image3.png",
        "caption": "Third Caption"
      }]
		}
	}
	componentDidMount() {
        setTimeout(
            this.setState({ act: 'act' })
        ,0)
    }
    componentWillUnmount(){
        setTimeout(
            this.setState({ act: '' })
        ,0)
    }
    openModal = (n:number) => {
      this.state.images.length > 0 ? ReactDOM.render( <PopGallery startIndex={n} images={this.state.images} /> , document.getElementById('model')) : '';
    }
    render() {
    const meta = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };
    return (
      <div className="container">
          {/* <DocumentMeta {...meta} />  */}
          <MainSlider imgs={Dynamic.imgs} />
          <div className="row">
            <article className="col-md-8 col-xs-12 gallery">
              <div className="row">
                {
                  this.state.images.map((i:any) => (
                    <ColImg key={i.id} image={i} onClick={() => this.openModal(i.id)} />
                  ))
                }                  
              </div>
            </article>
            <Sidebar />
          </div>
      </div>
    );
  }
}

export interface IImageData {
  id: number
  url: string
  caption: string
}

interface ColImgProps {
  image: IImageData
  onClick: any
}

export class ColImg extends React.Component<ColImgProps, any> {
  render() {
    return (
      <div className="col-sm-3 col-xs-6">
        <img src={require(`Images/${this.props.image.url}`)} onClick={this.props.onClick} className="hover-shadow" />
      </div>
    )
  }
}

export default Gallery;

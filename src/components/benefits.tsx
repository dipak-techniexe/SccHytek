import * as React from 'react';
import Sidebar from './comman/sidebar'
//import DocumentMeta from 'react-document-meta';
import MainSlider from './comman/slider'
const Dynamic = require('./dynamic.json')

export interface BenefitsProps {
}

class Benefits extends React.Component<BenefitsProps, any> {
    constructor(){
		super()
		this.state={
		act: ''
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
            <article className="col-md-8 col-xs-12">
                <h2>HYTEK is a highly adaptable steel frame system that allows complete design flexibility. We specialise in domestic, commercial and architectural steel frame solutions in Brisbane and SE Qld.</h2>
                <p>We are proud to be the only steel framing company in Queensland with ISO 9001 Accreditation. &nbsp;This means you are guaranteed to be working with a company that only uses the best materials, systems and technology in the industry. At no expense to our customer, HYTEK are audited and made accountable to deliver the best to you every day of the week.</p>
                <h3>Rigid, quick &amp; easy construction</h3>
                <p>To ensure accuracy across the whole manufacturing process, HYTEK utilises 3D design and detailing software that connects directly to our manufacturing facilities to produce guaranteed dimensionally correct steel frames within +/– 1mm of design specifications.</p>
                <p>No matter your needs, our team at HYTEK will work with you to reach your goals. Structurally we have the ability to provide engineering certification or work with your own engineer to provide the solution required.</p>
                <p>HYTEK steel framing is your solution for all new and future projects. Contact us to find out how to take the next step towards success with Light Gauge Steel Framing.</p>
                <h4>Hytek is proud to be associated with Textor Metal Industries, an industry leader with over 50 years’ experience in the building and construction industry. Established in 1963.</h4>
            </article>
            <Sidebar />
          </div>
      </div>
    );
  }
}

export default Benefits;

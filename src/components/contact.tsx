import * as React from 'react';
import Sidebar from './comman/sidebar'
//import DocumentMeta from 'react-document-meta';
import MainSlider from './comman/slider'
const Dynamic = require('./dynamic.json')

export interface ContactProps {
}

class Contact extends React.Component<ContactProps, any> {
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
      <div id="Contact" className="container">
          {/* <DocumentMeta {...meta} />  */}
          <MainSlider imgs={Dynamic.imgs} />
          <div className="row">
            <article className="col-md-8 col-xs-12">
                <iframe src="https://www.google.com/maps/d/embed?mid=zOxNxgufP_VY.kPrr2CbjKGTA" width={'100%'} height="300px"></iframe>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                      <h2>SCC INFRASTRUCTURE PVT. LTD. (Formerly, Shashin Construction Company)</h2>
                      <address>
                          <h4>Head Office : Ahmedabad</h4>
                          <p>104, Sumel-&shy;2, Beside Gurudwara Temple<br />
                              S.G.Highway Road,<br />
                              Thaltej, Ahmedabad&shy;-380054<br />
                              Gujarat, INDIA.
                          </p>
                      </address>
                      <ul className="social">
                          <li><i className="fa fa-phone"></i> : <a href="tel:+91-79-2684 0733">+91-79-2684 0733</a></li>
                          <li><i className="fa fa-fax"></i>	: +91-79-2684 0717</li>
                          <li><i className="fa fa-envelope"></i> : <a href="mailto:admin@sccinfrastructure.com">admin@sccinfrastructure.com</a></li>
                          <li><i className="fa fa-envelope"></i> : <a href="mailto:careers@sccinfrastructure.com">careers@sccinfrastructure.com.</a></li>
                      </ul>
                  </div>
                  <form>
                    <div className="col-sm-6 col-xs-12">
                      <div className="row">
                          <div className="col-xs-12">
                              <label htmlFor="Question37">Name &nbsp;<span className="required">*</span></label>
                              <input name="Question37" id="Question37" type="text" value="" />
                              <label htmlFor="Question40">Organization&nbsp;<span className="required">*</span></label>
                              <input name="Question40" id="Question40" type="text" value="" />
                              <label htmlFor="Question39">Email &nbsp;<span className="required">*</span></label>
                              <input name="Question39" id="Question39" type="email" value="" />
                              <label htmlFor="Question39">Confirm Email &nbsp;<span className="required">*</span></label>
                              <input name="Question39" id="Question39" type="email" value="" />
                              <label htmlFor="Question42">Questions/Comments&nbsp;<span className="required">*</span></label>
                              <textarea name="Question42" id="Question42"></textarea>
                          </div>
                      </div>
                      <input className="formBlockSubmitButton ccm-input-button" name="Submit" type="submit" value="Submit" />
                    </div>
                  </form>
                </div>
            </article>
            <Sidebar />
          </div>
      </div>
    );
  }
}

export default Contact;

import React, {Component} from 'react'; 

class Author extends Component{
    fonctionAuClic(){
      alert(this.props.name);
    }
    render(){
      return (<div>
                  <button onClick={this.fonctionAuClic.bind(this)}>
                  cliquez
                  </button>
              </div>);
    }
}
export default Author;
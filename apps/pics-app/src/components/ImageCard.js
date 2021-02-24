import React  from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10) + 1;
    this.setState({ spans })
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  render() {
    const {name, thumbnailUrl} = this.props.image;
    return (
      <div className = "image-card" style={{ gridRowEnd: `span ${this.state.spans }`}}>
        <img 
          ref={this.imageRef}
          alt={name} 
          src={thumbnailUrl}
          title={name}
        />
      </div>
    )
  }
}
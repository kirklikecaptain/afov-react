import React from "react";

class ImageLoader extends React.Component {
	// constructor(props) {
  //   super(props);
  //   this.state = { isLoaded: false };
  // }

  state = {
		isLoaded: false
	};

  handleImageLoad = () => {
    this.setState({ isLoaded: true });
	}

	handleImageError = () => {
		this.setState({ isLoaded: false });
	}


  render() {

    return (
      <>
				<img
					className={this.props.className}
					src={this.props.imgSrc}
					onLoad={this.handleImageLoad}
					onError={this.handleImageError}
				/>
				{!this.state.isLoaded && <div style={{paddingTop: this.props.ratio ? this.props.ratio : '56.25%'}}></div>}
      </>
    );
  }
}
export default ImageLoader;
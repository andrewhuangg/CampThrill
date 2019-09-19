import React from 'react';


class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handlePreviousPhoto = this.handlePreviousPhoto.bind(this);
    this.handleNextPhoto = this.handleNextPhoto.bind(this);
  }

  handlePreviousPhoto(e) {
    e.preventDefault();

    const carouselSlide = this.refs.carouselSlide;
    const carouselImages = this.refs.carouselSlide.childNodes;
    const size = carouselImages[0].clientWidth;
    let that = this;

    if (this.state.counter <= 0) {
      this.setState({
        counter: carouselImages.length - 2
      });
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }

    setTimeout(() => {
      if ((carouselImages[that.state.counter].className === "lastClone")) {
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-size * that.state.counter - 1) + 'px)';
        that.setState({
          counter: 7
        });
      } else {
        carouselSlide.style.transform = 'translateX(' + (-size * that.state.counter) + 'px)';
      }
    }, 0);

  }

  handleNextPhoto(e) {
    e.preventDefault();
    const carouselSlide = this.refs.carouselSlide;
    const carouselImages = this.refs.carouselSlide.childNodes;
    const size = carouselImages[0].clientWidth;
    let that = this;

    this.setState({
      counter: this.state.counter + 1
    });

    setTimeout(() => {
      if ((carouselImages[that.state.counter].className) === "firstClone") {
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-size * 0) + 'px)';
        that.setState({
          counter: 0
        });
      } else {
        carouselSlide.style.transform = 'translateX(' + (-size * that.state.counter) + 'px)';
      }
    }, 0);

  }

  render() {
    if (!this.props.photos) return null;

    const photos = this.props.photos.map((photoUrl, idx) =>
      <img src={photoUrl} key={idx} className="carousel-photo" key={idx}/>
      console.log(img.width, img.naturalWidth)
    )


    const firstImg = this.props.photos[0];
    const lastImg = this.props.photos[this.props.photos.length - 1];

    photos.push(
      <img src={firstImg} className="firstClone" /> 
    );
    photos.unshift(
      <img src={lastImg} className="lastClone" />
    );

    return (
      <div className="carousel-main-container">
        <div className="carousel-inner-container">
          <div className="carousel-slide" ref="carouselSlide">
            {photos}
          </div>
        </div>

        <button className="prevBtn" onClick={this.handlePreviousPhoto}>
          <i className="fas fa-angle-left"></i>
        </button>

        <button className="nextBtn" onClick={this.handleNextPhoto}>
          <i className="fas fa-angle-right"></i>
        </button>
        
      </div>
    )
  }
}

export default Carousel
import React from 'react';


class Carousel extends React.Component {

  constructor(props) {
    super(props);
    
    this.handlePreviousPhoto = this.handlePreviousPhoto.bind(this);
    this.handleNextPhoto = this.handleNextPhoto.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.state = {
      counter: 0
    };
  }

  handlePreviousPhoto(e) {
    e.preventDefault();
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.getElementsByClassName('carousel-slide')[0].childNodes;
    const size = carouselImages[0].clientWidth;

    this.setState({
      counter: this.state.counter - 1
    });

    setTimeout(() => {
      carouselSlide.style.transition = "transform 0.3s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
    }, 0);

    if ((carouselImages[this.state.counter].className) === "lastClone" && this.state.counter <= 0) {
      carouselSlide.style.transition = "none";
      this.setState({
        counter: this.state.counter = carouselImages.length - 1
      });
      carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
    }

  }

  handleNextPhoto(e) {
    e.preventDefault();
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.getElementsByClassName('carousel-slide')[0].childNodes;
    const size = carouselImages[0].clientWidth;

    this.setState({
      counter: this.state.counter + 1
    });

    setTimeout(() => {
      carouselSlide.style.transition = "transform 0.3s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
    }, 0);

    if ((carouselImages[this.state.counter].className) === "firstClone" && this.state.counter >= carouselImages.length - 1) {
      carouselSlide.style.transition = "none";
      this.setState({
        counter: this.state.counter = 0
      });
      carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
    }
  }

  handleTransitionEnd(e) {
    e.preventDefault();
    const carouselImages = document.getElementsByClassName('carousel-slide')[0].childNodes;
    const carouselSlide = document.querySelector('.carousel-slide');
    const size = carouselImages[0].clientWidth;

    if (carouselImages[this.state.counter].className === "firstClone") {
      this.setState({
        counter: 0
      });
      setTimeout(() => {
        carouselSlide.style.transition = "transform 0.3s ease-in-out";
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
      }, 0);
    }

    if (carouselImages[this.state.counter].className === "lastClone") {
      this.setState({
        counter: carouselImages.length - 1
      });
      setTimeout(() => {
        carouselSlide.style.transition = "transform 0.3s ease-in-out";
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
      }, 0);
    }
  }

  render() {
    if (!this.props.photos) return null;

    const photos = this.props.photos.map((photoUrl, idx) => 
      <img src={photoUrl} key={idx} className="carousel-photo" />
    )


    const firstImg = this.props.photos[0];
    const lastImg = this.props.photos[this.props.photos.length - 1];
    photos.push(<img src={firstImg} className="firstClone" />);
    photos.unshift(<img src={lastImg} className="lastClone" />);

    return (
      <div className="carousel-main-container">
        <div className="carousel-inner-container">
          <div className="carousel-slide" onTransitionEnd={this.handleTransitionEnd}>
            {photos}
          </div>
        </div>

        <button className="prevBtn" onClick={this.handlePreviousPhoto}>
          <i class="fas fa-angle-left"></i>
        
        </button>
        <button className="nextBtn" onClick={this.handleNextPhoto}>
          <i class="fas fa-angle-right"></i>
        </button>
        
      </div>
    )
  }
}

export default Carousel
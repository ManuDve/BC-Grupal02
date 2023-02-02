class ExampleApp extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: 5,
        value2: 10,
        value3: 10,
        value4: {
          min: 5,
          max: 10,
        },
        value5: {
          min: 3,
          max: 7,
        },
      };
    }
  
    render() {
      return (
        <form className="form">
          <InputRange
            maxValue={20}
            minValue={0}
            value={this.state.value}
            onChange={value => this.setState({ value })}
            onChangeComplete={value => console.log(value)} />
  
          <InputRange
            maxValue={20}
            minValue={0}
            disabled
            value={this.state.value2}
            onChange={value => this.setState({ value })}
            onChangeComplete={value => console.log(value)} />
  
          <InputRange
            maxValue={20}
            minValue={0}
            formatLabel={value => value.toFixed(2)}
            value={this.state.value3}
            onChange={value => this.setState({ value3: value })}
            onChangeComplete={value => console.log(value)} />
  
          <InputRange
            maxValue={20}
            minValue={0}
            formatLabel={value => `${value} kg`}
            value={this.state.value4}
            onChange={value => this.setState({ value4: value })}
            onChangeComplete={value => console.log(value)} />
          
          <InputRange
            draggableTrack
            maxValue={20}
            minValue={0}
            onChange={value => this.setState({ value5: value })}
            onChangeComplete={value => console.log(value)}
            value={this.state.value5} />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <ExampleApp />,
    document.getElementById('app')
  );
  
  // Animaciones 
  const scrollElements = document.querySelectorAll(".js-scroll");
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });
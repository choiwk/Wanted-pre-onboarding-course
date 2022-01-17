import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                {/* {imgSrc.map((el, index) => (
                  <img src={el.src} alt="이미지" key={index} />
                ))} */}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;

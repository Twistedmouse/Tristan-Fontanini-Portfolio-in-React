import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="Container">
        <div className="grid-container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <div className="pTagColor">
                <p className="pTagColor">Hey there, my name is</p>
              </div>
              <div className="h1ColorChange">
                <h1 className="h1ColorChange" class="font-weight-light">
                  Tristan Fontanini,
                </h1>
              </div>
              <div className="pTag">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="imgTag">
                <p className="imgTag"> image here replace with img tag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css" ;
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

  const App=()=>{
    let settings = {
        dot:true,
        infinite:true,
        speed : 500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase:"linear"
    }
    return(<>
    
    <h2>Display an Element on Hover</h2>
    <div id = "sect">
        <Slider {...settings}>
      {/* 1 */}
     
  <div id="Div">
      <div className="myDIV">
      <img className="img1" src="https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mypic" className="card_img" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      </div>   
      <div className="show"> 
      <button className="hide">Add to queue</button>
      <br />
      
      <button className="hide">Watch Later</button>
      </div> 
      </div>

      {/* 2 */}
      <div id="Div">
      <div className="myDIV">
      <img className="img1" src="https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mypic" className="card_img" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      </div>   
      <div className="show"> 
      <button className="hide">Add to queue</button>
      <br />
      <button className="hide">Watch Later</button>
      </div> 
      </div>

      {/* 3 */}
      <div id="Div">
      <div className="myDIV">
      <img className="img1" src="https://images.pexels.com/photos/5028853/pexels-photo-5028853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mypic" className="card_img" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      </div>   
      <div className="show"> 
      <button className="hide">Add to queue</button>
      <br />
      <button className="hide">Watch Later</button>
      </div> 
      </div>

      {/* 4 */}
      <div id="Div">
      <div className="myDIV">
      <img className="img1" src="https://images.pexels.com/photos/4830728/pexels-photo-4830728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mypic" className="card_img" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      </div>   
      <div className="show"> 
      <button className="hide">Add to queue</button>
      <br />
      <button className="hide">Watch Later</button>
      </div> 
      </div>

      </Slider>
</div>
</>
  );
}

export default App;

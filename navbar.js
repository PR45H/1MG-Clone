function navbar() {
    return `
    <section style="border-bottom: 1px solid #f1f4f6;">
      <div class="navBar-left">
        <a href="index.html">
          <img
            src="tata_1mg_logo.svg"
            alt="tata_1mg_logo"
            width="100px"
            style="cursor: pointer; padding: 5px 15px"
          />
        </a>
        <div class="services">
          <a href="medicines.html" target="_blank" class="sans-medium">MEDICINES</a>
          <a href="">LAB TESTS</a>
          <a href="">CONSULT DOCTORS</a>
          <a href="">CANCER CARE</a>
          <a href="">AYURVEDA</a>
          <a href="">CARE PLAN</a>
        </div>
      </div>
      <!-- Profile section on right -->
      <div class="navBar-right">
      <div class="login-container">
        <a
          href="login.html"
          style="text-decoration: none; color: black; cursor: pointer"
          >Login</a
        >
        <span> | </span>
        <a
          href=""
          style="text-decoration: none; color: black; cursor: pointer"
          >Sign Up</a
        >
      </div>

        <div class="offers">
          <span style="cursor: pointer"> Offers </span>
        </div>

        <img
          src="shopping-cart.png"
          alt=""
          style="padding: 10px 20px; cursor: pointer"
          class="cart"
        />

        <div class="help" style="padding: 10px 20px">
          <span style="cursor: pointer"> Need Help? </span>
        </div>
      </div>
    </section>

    <section id="bottom-row" style="width: 100vw; border-bottom: 1px solid #f1f4f6; height: 40px;">
        <div id="location-search">
<!-- Location input -->
            <div class="location" style="padding: 6px 0 5px 5px; background-color: #fff;  width: 26%; ">
                <div class="city-locator">

                        <span style="padding: 7px;align-items: center; ">
                            <i class="fa-solid fa-location-dot" style="color: #676a6f;"></i>
                        </span>

                        <input type="text" value="New Delhi" >

                        <span style="padding: 7px;align-items: center; ">
                            <i class="fa-solid fa-location-crosshairs" style="color: #676a6f;"></i>
                        </span>
                        
                </div>

            </div>
<!-- Search bar -->
            <div class="search-bar" style="width: 55%; padding: 7px 14px 7px 1px;">
                <input type="text" placeholder="Search for Medicines and Health Products">
            </div>
                <span style="padding: 7px;align-items: center; background-color: #f1f4f6;">
                    <i class="fa-solid fa-magnifying-glass" style="color: #676a6f; cursor: pointer;" ></i>
                </span>
            </div>
<!-- Quick Buy segment -->
        <div class="quick-buy">
            <!-- <i class="fa-solid fa-bolt" style="color: #9f5650;"></i> -->
            <div style="display: flex; align-items: center; padding: 12px 5px 12px 0;">
                <img src="quick_buy_rebrand_lqpnce.svg"></img>
                <div>
                    <span>QUICK BUY! Get 15% off on medicines*</span>
                </div> 
            </div>
            

            <div>
                <a href="Quick order.html" target="_blank"><button>Quick order</button></a>
            </div>


        </div>
    </section>
    `
}
export default navbar;
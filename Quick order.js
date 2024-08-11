function quickOrder() {
    return `
    
    </div>
    </section>
    <div id="order-via-prescription-container">

        <div id="row-order-via-prescription" style="display: flex; width: 90%; margin: auto; ">
            <div class="column-order-via-prescription">
                <div >
                    <h4>Upload Prescription</h4>
                    <p>Please attach a prescription to proceed
                    </p>

                    <a href="#" class="upload-container">
                        <img src="doc_upload.svg" alt="" style="width: 40px; height: 40px; margin: 16px 27px;">
                        <p class="upload-Box">UPLOAD NEW</p>
                    </a>
                    
                    <a href="#" class="upload-container">
                        <img src="prescription.svg" alt="" style="width: 40px; height: 40px; margin: 16px 27px;">
                        <p class="upload-Box">SAVED PRESCRIPTIONS</p>
                    </a>

                                            <!-- EMPTY COVER -->

                    <div class="empty-cover" style="padding: 0px 20px;">
                        <p>Attached Prescription</p>

                        <div style="display: flex;">
                            <div class="img">
                                <img src="empty.png" alt="No prescription icon">
                            </div>
                            <div>
                                <p>Uploaded prescriptions will be shown here</p>
                            </div>
                        </div>
                    </div>
                </div>

                                <!-- Disabled Continue button -->
                <div>
                    <a href="" class="disabled">
                        <span>
                            CONTINUE
                        </span>
                    </a>
                </div>
            </div>


            <div class="guide" style="margin-bottom: 50px; padding: 0px 15px;">
                <div >
                    <h4>Guide for a valid prescription</h4>
                    
                    <div class="image-container">
                        <img src="validate_rx.svg" alt="" style="width: 281px; height: 365px;">
                        <div>
                            <ul class="list-guide">
                                <li>Don't crop out any part of the image</li>
                                <li>Avoid blured image</li>
                                <li>Include details of doctor & patient + clinic visit date</li>
                                <li>Medicines will be dispensed as per prescription</li>
                                <li>Supported file type: jpeg, png, jpg, pdf</li>
                                <li>Maximum allowed file size: 5MB</li>
                            </ul>
                        </div>
                    </div>

        
                </div>

                <div style="font-size: 10px;margin-top: 4px;">
                    Government regulations require a valid prescription
                </div>
                
            </div>
        </div>

        <div class="care-plan-banner" style="width: 100%;">
            <img src="order-with-care-plan.png" alt="">
        </div>
    </div>
    `
}

export default quickOrder
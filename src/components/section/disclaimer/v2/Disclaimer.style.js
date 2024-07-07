import styled from "styled-components";
import aboutBg from "../../../../assets/images/bg/background.jpeg"

const AboutStyleWrapper = styled.section` 
    min-height: 914px; 
    padding-top: 133px;
    padding-bottom: 0px;
    background: url(${aboutBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative; 

    .v2_about_overlay {
        width: 100%;
        height: 70%;
        position: absolute;
        bottom: 0px;
        background: linear-gradient(180deg, rgba(4, 12, 18, 0) 0%, rgba(4, 12, 18, 0.7) 33.33%, #040C12 56.77%);
        z-index: 1;
    }

    .v2_about_us_content {
        position: relative;
    }

    .v2_about_us_text {
        position: relative;
        max-width: 770px; 
        margin: 46px auto auto auto; 
        z-index: 2;
        p { 
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
            margin: 0px;
            text-shadow: 4px 1px 3px rgba(0, 0, 0, 3.5);
        }
        p+p {
            margin: 20px 0; 
        }
    }

    .counter-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        max-width: 414px;
        width: 100%;
        margin: auto;
        margin-top: 20px;
          h4 {  
            font-size: 18px;
            line-height: 40px; 
            text-transform: uppercase;
            color: #FFFFFF;

            span{
                display: block;
                font-size: 36px;
                line-height: 40px; 
                text-transform: uppercase;
                color: #FFFFFF;
            }
        }
    }

    .v2_about_img{ 
        position: absolute; 
        top: 10px;
        z-index: 0;

        &.v2_about_img_left{
            left: 0px;
        }
        &.v2_about_img_right{
            right: 0px;
        }
    } 

    @media only screen and (max-width: 991px) {
        padding-top: 75px;
    }

    .v2_about_us_text {
        p {
            font-size: 13px;
            line-height: 25px;
            margin-bottom: 12px;
            color: white;
        }

        .modal-container-body {

            padding-top : 70px;

            h2 {
                text-align: center;
                color: white;
                text-shadow: 4px 1px 3px rgba(0, 0, 0, 3.5);
                background-color: #51bef6;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
            }
        
            p {
                color : white;  
                padding-top: 20px;
                text-shadow: 1px 4px 3px rgba(0, 0, 0, 3.5);
            }
        
            li {
                color : white;  
                padding-top: 20px;
                text-align: justify;
                text-shadow: 1px 4px 3px rgba(0, 0, 0, 3.5);
                padding-right:
            }
        
            a {
                color : yellow;
            }
        }
    }

    @media only screen and (max-width: 575px) {
        .v2_about_us_text {
            p {
                font-size: 13px;
                line-height: 25px;
                margin-bottom: 12px;
                
            }
        }
    }

`

export default AboutStyleWrapper;
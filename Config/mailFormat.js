const mailFormatGenerator = (user) => {
    const mailFormat = `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    
    <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" type="text/css" />
        <!--<![endif]-->
        <script src="https://kit.fontawesome.com/6fe0a77471.js" crossorigin="anonymous"></script>
        <style>
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
    
            p {
                line-height: inherit
            }
    
            i {
                font-size: 1.4rem;
            }
    
            .flex {
                display: flex;
                align-items: center;
                gap: .8rem;
            }
    
            .email-text {
                height: 40px;
            }
    
            .call {
                height: 40px;
    
            }
    
            .mail-img {
                width: 2rem;
            }
    
            .call-img {
                width: 1.7rem;
            }
    
            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }
    
            @media (max-width:700px) {
                .desktop_hide table.icons-inner {
                    display: inline-block !important;
                }
    
                .icons-inner {
                    text-align: center;
                }
    
                .icons-inner td {
                    margin: 0 auto;
                }
    
                .row-content {
                    width: 100% !important;
                }
    
                .mobile_hide {
                    display: none;
                }
    
                .stack .column {
                    width: 100%;
                    display: block;
                }
    
                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }
    
                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
    
                .row-2 .column-1 .block-1.heading_block td.pad {
                    padding: 10px 60px 30px !important;
                }
    
                .row-2 .column-1 .block-1.heading_block h1 {
                    font-size: 33px !important;
                }
            }
        </style>
    </head>
    
    <body style="margin: 0; background-color: #000000; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto; background-image: none; background-position: top left; background-repeat: no-repeat;"
            width="100%">
            <tbody>
                <tr>
                    <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 20px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="image_block block-1" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad"
                                                                    style="width:100%;padding-right:0px;padding-left:0px;">
                                                                    <div align="center" class="alignment"
                                                                        style="line-height:10px"><img
                                                                            src="https://i.postimg.cc/4xT0SZfB/company-logo.png"
                                                                            style="display: block; height: auto; border: 0; width: 136px; max-width: 100%;"
                                                                            width="136" /></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"
                            width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #ffffff; color: #000000; border-bottom: 0 solid #FFFFFF; border-left: 0 solid #FFFFFF; border-radius: 30px 30px 0 0; border-right: 0px solid #FFFFFF; border-top: 0 solid #FFFFFF; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="heading_block block-1" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad"
                                                                    style="padding-bottom:30px;padding-left:60px;padding-right:60px;padding-top:30px;text-align:center;width:100%;">
                                                                    <h1
                                                                        style="margin: 0; color: #fe6466; direction: ltr; font-family: Poppins, Arial, Helvetica, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;">
                                                                        <span class="tinyMce-placeholder">Treasury
                                                                            Technologies</span>
                                                                    </h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="heading_block block-1" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad" style="text-align:center;width:100%;">
                                                                    <h1
                                                                        style="margin: 0; color: #555555; direction: ltr; font-family: Poppins, Arial, Helvetica, sans-serif; font-size: 23px; font-weight: 700; letter-spacing: normal; line-height: 200%; text-align: center; margin-top: 0; margin-bottom: 0;">
                                                                        <span class="tinyMce-placeholder"><strong>New form
                                                                                submission on our website</strong></span>
                                                                    </h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 60px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="paragraph_block block-2" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad"
                                                                    style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:25px;">
                                                                    <div
                                                                        style="color:#000000;direction:ltr;font-family:Poppins, Arial, Helvetica, sans-serif;font-size:21px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:25.2px;">
                                                                        <p style="margin: 0;">Full Name : ${
                                                                            user.firstName +
                                                                            " " +
                                                                            user.lastName
                                                                        }
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="10" cellspacing="0"
                                                            class="paragraph_block block-3" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div
                                                                        style="color:#000000;direction:ltr;font-family:Poppins, Arial, Helvetica, sans-serif;font-size:21px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:25.2px;">
                                                                        <p style="margin: 0;">Email :
                                                                        ${
                                                                            user.email
                                                                        }</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="10" cellspacing="0"
                                                            class="paragraph_block block-4" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div
                                                                        style="color:#000000;direction:ltr;font-family:Poppins, Arial, Helvetica, sans-serif;font-size:21px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:25.2px;">
                                                                        <p style="margin: 0;">Phone No. :  ${
                                                                            user.phone
                                                                        }</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="10" cellspacing="0"
                                                            class="paragraph_block block-5" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div
                                                                        style="color:#000000;direction:ltr;font-family:Poppins, Arial, Helvetica, sans-serif;font-size:21px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:25.2px;">
                                                                        <p style="margin: 0;">Message :  ${
                                                                            user.message
                                                                        }</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 50px; padding-right: 50px; vertical-align: top; padding-top: 0px; padding-bottom: 40px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="10" cellspacing="0"
                                                            class="button_block block-1" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div align="center" class="alignment">
                                                                        <a href=${
                                                                            "mailto:" +
                                                                            user.email
                                                                        }
                                                                            style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#fe6466;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:700;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Poppins, Arial, Helvetica, sans-serif;font-size:18px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                            target="_blank"><span
                                                                                style="padding-left:20px;padding-right:20px;font-size:18px;display:inline-block;letter-spacing:1px;"><span
                                                                                    class="flex email-text" dir="ltr"
                                                                                    style="word-break: break-word; line-height: 32.4px;">
                                                                                   
                                                                                    Send Email</span></span></a>
                                                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                       ${
                                                           user.phone &&
                                                           ` <table border="0" cellpadding="10" cellspacing="0"
                                                       class="button_block block-2" role="presentation"
                                                       style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                       width="100%">
                                                       <tr>
                                                           <td class="pad">
                                                               <div align="center" class="alignment">
                                                                   <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:179px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#899ce4"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:18px"><![endif]-->
                                                                   <a href=${
                                                                       "tel:" +
                                                                       user.phone
                                                                   }
                                                                       style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#899ce4;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:700;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Poppins, Arial, Helvetica, sans-serif;font-size:18px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                       target="_blank"><span
                                                                           style="padding-left:20px;padding-right:20px;font-size:18px;display:inline-block;letter-spacing:1px;"><span
                                                                               class="flex call" dir="ltr"
                                                                               style="word-break: break-word; line-height: 32.4px;">
                                                                               Make a Call</span></span></a>
                                                                   <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                               </div>
                                                           </td>
                                                       </tr>
                                                   </table>`
                                                       }
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="image_block block-4" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad"
                                                                    style="width:100%;padding-right:0px;padding-left:0px;padding-top:35px;">
                                                                    <div align="center" class="alignment"
                                                                        style="line-height:10px"><img
                                                                            src="https://i.postimg.cc/4xT0SZfB/company-logo.png"
                                                                            style="display: block; height: auto; border: 0; width: 116px; max-width: 100%;"
                                                                            width="116" /></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="image_block block-5" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad"
                                                                    style="width:100%;padding-right:0px;padding-left:0px;">
                                                                    <div align="center" class="alignment"
                                                                        style="line-height:10px"><img alt="Likes"
                                                                            src="https://i.postimg.cc/P5Y4mC02/social-media-unscreen.gif"
                                                                            style="display: block; height: auto; border: 0; width: 116px; max-width: 100%;"
                                                                            title="Likes" width="116" /></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #899ce4; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 25px; padding-bottom: 25px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="20" cellspacing="0"
                                                            class="text_block block-1" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div style="font-family: sans-serif">
                                                                        <div class=""
                                                                            style="font-size: 12px; font-family: Poppins, Arial, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #fafafa; line-height: 1.5;">
                                                                            <p
                                                                                style="margin: 0; font-size: 10px; text-align: center; mso-line-height-alt: 15px;">
                                                                                <span style="font-size:10px;"><span
                                                                                        style="">© 2023 Treasury
                                                                                        Technologies . </span></span><span
                                                                                    style="font-size:10px;"><span style="">
                                                                                        All Rights Reserved.</span></span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="icons_block block-1" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td class="pad"
                                                                    style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                    <table cellpadding="0" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                        width="100%">
                                                                        <tr>
                                                                            <td class="alignment"
                                                                                style="vertical-align: middle; text-align: center;">
                                                                                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                <!--[if !vml]><!-->
                                                                                <table cellpadding="0" cellspacing="0"
                                                                                    class="icons-inner" role="presentation"
                                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
                                                                                    <!--<![endif]-->
    
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table><!-- End -->
    </body>
    
    </html>`;
    return mailFormat;
};

module.exports = mailFormatGenerator;

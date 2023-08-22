import React from 'react'
import Header from '../../components/header/Header'
import '../../pages/home/Home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Header />
            {/* Order Online */}
            <section id='order-online'>
                <div class="video">
                    <video class="elementor-video" src="https://stackshack.co.uk/wp-content/uploads/2023/07/6a174ff7-bca3-43f3-a93e-143389dee01b.mp4" autoplay="" loop="" muted="muted" controlslist="nodownload"></video>
                </div>
                <div className='heading-texts'>
                    <h2 className='heading'>TODAY'S A STACKIN' DAY</h2>
                    <h2 class="heading-title">Secret family recipes are the stuff of legends and Stack Shack burger blend is no exception.</h2>
                    <div className='order-link'>
                        <a className='link-span' href='https://www.ubereats.com/gb/store/stack-shack/H2bcP4P8Ur2hfkQ_WyZtwQ'>
                            <span className='text-order'>ORDER ONLINE</span>
                        </a>
                    </div>
                </div>

            </section >
            <section id='newsletter'>
                <div className='newsletter-container'>
                    <div class="widget-container">
                        <img className='image' decoding="async" width="500px" height="500px" src="https://stackshack.co.uk/wp-content/uploads/2023/04/SpeechBubble.gif" class="attachment-full size-full wp-image-1620" alt="" />
                    </div>

                    <div class="widget-container">
                        <h2 class="heading-title">UNLEASH THE FLAVOUR</h2>
                    </div>

                    <div class="widget-container">
                        <h2 class="heading-text">Stack Shack is a unique and independent quick service brand. Stack Shack burgers and shakes are made pretty hot and tasty. The ultimate “melt in your mouth”
                            experience. We are a fast-casual operation with dine in and take-away elements.</h2>
                    </div>
                    <div class="button-wrapper">
                        <a class="button-link" href="#newsletter" target="_blank">
                            <span class="button-content-wrapper">
                                <span class="elementor-button-text">SIGN UP TO OUR NEWSLETTER</span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            <section id='sign-up'>
                <div className='sign-up-container'>
                    <div className='sign-up-image-one'>
                        <img decoding="async" loading="lazy" width="265" height="265" src="https://stackshack.co.uk/wp-content/uploads/2023/03/SecretSauce.gif" class="attachment-large size-large wp-image-1524" alt="photo" />
                    </div>
                    <div className='form-container'>
                        <div className='title-text'>
                            <h2 class="heading-title">SIGN UP TO OUR NEWSLETTER</h2>
                            <h2 className='heading-text'>DON'T WORRY WE WILL NOT SPAM YOU</h2>

                        </div>
                        <div className='form'>
                            <form>
                                <div className='label-input'>
                                    <label className='from-label'>NAME</label>
                                    <input type='text' />
                                </div>
                                <div className='label-input'>
                                    <label className='from-label'>EMAIL</label>
                                    <input type='email' />
                                </div>
                                <div className='label-input'>
                                    <label className='from-label'>TELEPHONE</label>
                                    <input type='text' placeholder='07' />
                                </div>
                                <div className='label-input'>
                                    <label className='from-label'>WHEN IS IT YOUR BIRTHDAY?</label>
                                    <input type='date' />
                                </div>
                                <div class="button-wrapper"><a class="button-link" href="#newsletter" target="_blank"><span class="button-content-wrapper"><span class="elementor-button-text">SIGN ME UP</span></span></a></div>
                            </form>
                        </div>
                    </div>
                    <div className='sign-up-image-two'>
                        <img decoding="async" loading="lazy" width="265" height="265" src="https://stackshack.co.uk/wp-content/uploads/2023/03/TopDog.gif" class="attachment-large size-large wp-image-1540" alt="image" />
                    </div>


                </div>
            </section>
        </div >
    )
}

export default Home

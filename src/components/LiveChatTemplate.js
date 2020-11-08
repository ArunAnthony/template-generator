import React, { useState, useEffect, useRef } from 'react';
import arrow from '../down-arrow.svg';

import { saveAsPng, saveAsJpeg } from 'save-html-as-image';

const LiveChatTemplate = () => {
    const templateRef = useRef(null);

    const [content, setContent] = useState({
        "topic": "",
        "event_date_time": "At 5:00 pm | 14th July 2020",
        "host_name": "",
        "expertise": "",
        "img_url": "",
        "on_platform": "instagram",
    });

    const [imgPrev, setImgPrev] = useState("");

    const handleChange = e => {
        setContent({
            ...content,
            [e.target.name]: [e.target.value],
        });
    }

    useEffect(() => {
        if (content.img_url) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgPrev(reader.result);
            }
            reader.readAsDataURL(content.img_url);
        } else {
            setImgPrev(null);
        }
    }, [content.img_url])

    const handleImageChange = e => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            setContent({
                ...content,
                img_url: file,
            });
        }
    }


    const handleSave = () => {
        const node = templateRef.current;
        saveAsPng(node, { filename: 'template', printDate: false });
    }

    return (
        <div className='template-wrapper'>
            <div className='single-chat-form'>
                <input type="text" value={content.topic} placeholder='Enter topic name' name='topic' onChange={handleChange} className='form-input' />
                <input type="text" value={content.event_date_time} placeholder='Enter date and time' name='event_date_time' onChange={handleChange} className='form-input' />
                <input type="text" value={content.host_name} placeholder='Enter host name' name='host_name' onChange={handleChange} className='form-input' />
                <input type="text" value={content.expertise} placeholder='Enter your Expertise' name='expertise' onChange={handleChange} className='form-input' />
                <input type="text" value={content.on_platform} placeholder='Enter platform' name='on_platform' onChange={handleChange} className='form-input' />
                <input type="file" placeholder='Add Image' name='img_url' onChange={handleImageChange} className='form-input' accept='image/*' />

                <button onClick={handleSave}> Save </button>
            </div>

            <div className='single-chat-template' ref={templateRef}>
                <div className='info-wrapper'>
                    <div className='section-1'>
                        <div className="live-box">
                            <div className='live-text'>
                                Live
                            </div>
                            <img src={arrow} alt='down-arrow' className='down-arrow' />
                        </div>
                        <div className='video-text-block'>
                            <div className='title'>Video Chat</div>
                            <div className='platform-name'> only on {content.on_platform}</div>
                        </div>
                    </div>

                    <div className='topic'>
                        {content.topic}
                    </div>
                    <div className='event_date_time'>
                        {content.event_date_time}
                    </div>
                    <div className='host_name'>
                        {content.host_name}
                    </div>
                    <div className='expertise'>
                        {content.expertise}
                    </div>
                </div>
                <div className='img-wrapper'>
                    {imgPrev && <img src={imgPrev} className='img-host' alt='host-img' width='110px' height='110px' />}
                </div>
            </div>
        </div>
    )
}

export default LiveChatTemplate;

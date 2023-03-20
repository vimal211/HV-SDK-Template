import React from 'react';
import { initialize,RecorderWidget } from "@hippovideo/video-sdk";
import { StyledTemplateCard } from './TemplateCard.style';
// import "@hippovideo/video-sdk/app/hv_recorder.css";


function TemplateCard({ title,description, templateConfig }) {

  let initializeOptions = {
    token: '9faa3498-371c-4c6e-97fb-84d6176e766f1663916871',
  };

  const onVideoSdkInitialize = ( success, error ) => {
    if (success) {

      let recorderWidgetConfig = templateConfig;
  
      RecorderWidget.create(success.key, recorderWidgetConfig)
      .then((recorder) => {
  recorder.open()
        recorder.on("record_details", (data) => {
          console.info('Recording Data : ', data);
        });
  
        recorder.on("video_submitted", (data) => {
            console.info('Recording Submitted : ', data);
        });
      })
      .catch((error) => {
        //Error details if there is an error during widget creation
      })
    }
  }

  const intitalizeRcorder = () => {
    console.log(templateConfig);
    initialize(initializeOptions, onVideoSdkInitialize)
  }
  return (
    <StyledTemplateCard>
        <div className='template_title'>{title}</div>
        <div className='template_description'>{description}</div>
        <div onClick={intitalizeRcorder} className='template_record_btn'>Open Recorder</div>
    </StyledTemplateCard>
  )
}

export default TemplateCard
import React from 'react'
import TemplateCard from '../components/TempalateCard/TemplateCard';
import { StyledHomePage } from './SdkTemplateHome.style';
import TemplateConfig from '../utils/template_config';

function SdkTemplateHome() {
  return (
    <StyledHomePage>
      <div className='template_header'>SDK Templates</div>
      <div className='template_body'>
        <TemplateCard title={"Template 1"} description={'Default Recorder'} templateConfig={TemplateConfig.template1}/>
        <TemplateCard title={"Template 2"} description={'Draggable Webcam'} templateConfig={TemplateConfig.template2}/>
        <TemplateCard title={"Template 3"} description={'Screen and Webcam without webcam preview while recording'} templateConfig={TemplateConfig.template3}/>
        {/* <TemplateCard title={"Template 4"} templateConfig={TemplateConfig.template4}/> */}
      </div>
    </StyledHomePage>
  )
}

export default SdkTemplateHome
const defualtwidgetConfig = {
    edit: true,
    auto_submit: false,
    inline: false,
    show_video_title: true,
    footer: true,
    retake_video: true,
    record_config: {
        teleprompter: false,
        show_selectable_options: true,
        screen: true,
        webcam: true,
        mic: true,
        show_cancel_submit: true,
        display_surface:'monitor',
        mirror_webcam: false,
        asset_type: false,
        drag_enabled:true,
        hide_webcam_preview:false,
    },
    advanced_settings: {
        show_system_audio: true,
        show_markup_tools: true,
        show_mirror_mode: false,
        show_lower_third: true,
        show_center_webcam: true,
        show_webcam_source: true,
        show_audio_source: true,
        show_aspect_ratio: true,
        show_webcam_shape: true,
        show_webcam_size: true,
        show_webcam_position: true,
        show_video_resoltion: true,
    }
}

const template2Config = {
    edit: true,
    auto_submit: false,
    inline: false,
    show_video_title: true,
    footer: true,
    retake_video: true,
    record_config: {
        teleprompter: false,
        show_selectable_options: true,
        screen: true,
        webcam: true,
        mic: true,
        show_cancel_submit: true,
        display_surface:'monitor',
        mirror_webcam: false,
        asset_type: false,
        drag_enabled:false,
        hide_webcam_preview:false,
    },
    advanced_settings: {
        show_system_audio: true,
        show_markup_tools: true,
        show_mirror_mode: false,
        show_lower_third: true,
        show_center_webcam: true,
        show_webcam_source: true,
        show_audio_source: true,
        show_aspect_ratio: true,
        show_webcam_shape: true,
        show_webcam_size: true,
        show_webcam_position: true,
        show_video_resoltion: true,
    }

}

const template3Config = {
    edit: true,
    auto_submit: false,
    inline: false,
    show_video_title: true,
    footer: true,
    retake_video: true,
    record_config: {
        teleprompter: false,
        show_selectable_options: true,
        screen: true,
        webcam: true,
        mic: true,
        show_cancel_submit: true,
        display_surface:'monitor',
        mirror_webcam: false,
        asset_type: false,
        drag_enabled:false,
        hide_webcam_preview:true,
    },
    advanced_settings: {
        show_system_audio: true,
        show_markup_tools: true,
        show_mirror_mode: false,
        show_lower_third: true,
        show_center_webcam: true,
        show_webcam_source: true,
        show_audio_source: true,
        show_aspect_ratio: true,
        show_webcam_shape: false,
        show_webcam_size: true,
        show_webcam_position: true,
        show_video_resoltion: true,
    }
}

const TemplateConfig = {
    template1: defualtwidgetConfig,
    template2: template2Config,
    template3: template3Config,
};

export default TemplateConfig;
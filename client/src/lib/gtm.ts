declare global {
    interface Window {
        dataLayer: any[];
    }
}

export type CTAPosition = 'header' | 'hero' | 'middle' | 'final' | 'modal' | 'footer';
export type PathType = 'direct' | 'modal';
export type ModalName = 'agendar_diagnostico';
export type SocialPlatform = 'linkedin' | 'instagram';

// Custom type structure for each event
export interface GTMEventPayloads {
    cta_open_modal: {
        cta_position: CTAPosition;
        cta_text: string;
        modal_name: ModalName;
        path_type?: PathType;
    };
    modal_open: {
        modal_name: ModalName;
        origin_cta_position: CTAPosition;
        origin_cta_text: string;
    };
    whatsapp_click: {
        cta_position: CTAPosition;
        cta_text: string;
        path_type: PathType;
        link_url: string;
    };
    faq_open: {
        faq_question: string;
    };
    social_click: {
        social_platform: SocialPlatform;
        link_url: string;
        link_text?: string;
    };
    // Future usage
    form_submit_diagnostico: {
        // add fields when implementing forms
        [key: string]: any;
    };
    lead_diagnostico_step: {
        step: number;
    };
    lead_diagnostico_submit: Record<string, never>;
    cta_agendar_diagnostico_click: Record<string, never>;
}

export type GTMEventName = keyof GTMEventPayloads;

/**
 * Pushes standard events to the Google Tag Manager DataLayer.
 */
export const pushToDataLayer = <T extends GTMEventName>(
    eventName: T,
    payload: GTMEventPayloads[T]
) => {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: eventName,
        ...payload
    });

    // Console logging for verification in dev
    if (import.meta.env.DEV) {
        console.log(`[GTM] ${eventName}`, payload);
    }
};

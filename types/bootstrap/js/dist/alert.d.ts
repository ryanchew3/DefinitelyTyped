import BaseComponent, { GetInstanceFactory } from './base-component';

declare class Alert extends BaseComponent {
    static NAME: 'alert';
    static jQueryInterface: Alert.jQueryInterface;
    static getInstance: GetInstanceFactory<Alert>;
    /**
     * Closes an alert by removing it from the DOM. If the .fade and .show
     * classes are present on the element, the alert will fade out before it
     * is removed.
     */
    close(): void;
}

declare namespace Alert {
    enum Events {
        /**
         * Fires immediately when the close instance method is called.
         */
        close = 'close.bs.alert',

        /**
         * Fired when the alert has been closed and CSS transitions have
         * completed.
         */
        closed = 'closed.bs.alert',
    }

    type jQueryInterface = (config?: 'close' | 'dispose') => void;
}

export default Alert;

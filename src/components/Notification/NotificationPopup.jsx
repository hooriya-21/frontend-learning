
import "./NotificationPopup.css";

function NotificationPopup({ notification, onClose }) {
    // Do not display the popup if there is no notification.
    if (!notification) return null;

    return (
        // Main container for the notification popup.
        <div
            className={`notification-popup notification-popup--${
                notification.type?.toLowerCase() || "incident"
            }`}
            role="status"
            aria-live="polite"
        >
            {/* Display notification information. */}
            <div className="notification-popup__content">
                <strong className="notification-popup__title">
                    {notification.title}
                </strong>

                <p className="notification-popup__message">
                    {notification.message}
                </p>
            </div>

            {/* Close the popup when the button is clicked. */}
            <button
                type="button"
                className="notification-popup__close"
                onClick={onClose}
                aria-label="Close notification"
            >
                ×
            </button>
        </div>
    );
}

export default NotificationPopup;

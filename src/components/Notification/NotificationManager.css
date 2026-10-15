import { useEffect, useState } from "react";
import { mockNotifications } from "../../../data/notifications/notifications.mock";
import "./NotificationManager.css";

function NotificationManager({ onNotification }) {
    // Store the notification currently shown in the popup.
    const [floatingToast, setFloatingToast] = useState(null);

    useEffect(() => {
        let index = 0;
        let popupTimer;
        let nextNotificationTimer;

        // Display mock notifications one after another.
        const showNextNotification = () => {
            // Stop when all mock notifications have been displayed.
            if (index >= mockNotifications.length) return;

            const notification = {
                ...mockNotifications[index],
                createdAt: Date.now(),
            };

            index++;

            // Send the notification to the parent component if needed.
            onNotification?.(notification);

            // Display the notification popup.
            setFloatingToast(notification);

            // Hide the popup after 4 seconds.
            popupTimer = setTimeout(() => {
                setFloatingToast(null);

                // Wait 3 seconds before showing the next notification.
                nextNotificationTimer = setTimeout(
                    showNextNotification,
                    3000
                );
            }, 4000);
        };

        // Wait 4 seconds before displaying the first notification.
        nextNotificationTimer = setTimeout(
            showNextNotification,
            4000
        );

        // Handle notifications triggered by other components.
        const handleNewNotification = (event) => {
            if (!event.detail) return;

            const notification = {
                ...event.detail,
                createdAt: Date.now(),
            };

            onNotification?.(notification);
            setFloatingToast(notification);
        };

        // Listen for the application's custom notification event.
        window.addEventListener(
            "cdmp:new-notification",
            handleNewNotification
        );

        // Clean up timers and event listeners when the component unmounts.
        return () => {
            clearTimeout(popupTimer);
            clearTimeout(nextNotificationTimer);

            window.removeEventListener(
                "cdmp:new-notification",
                handleNewNotification
            );
        };
    }, [onNotification]);

    // Render nothing when no notification is active.
    if (!floatingToast) return null;

    return (
        // Apply a different CSS class based on the notification type.
        <div
            className={`cdmp-floating-toast cdmp-floating-toast--${
                floatingToast.type?.toLowerCase() || "incident"
            }`}
            role="status"
            aria-live="polite"
        >
            {/* Display the notification title, time, and message. */}
            <div className="cdmp-floating-toast__content">
                <div className="cdmp-floating-toast__top">
                    <strong className="cdmp-floating-toast__title">
                        {floatingToast.title}
                    </strong>

                    <span className="cdmp-floating-toast__time">
                        Just now
                    </span>
                </div>

                <p className="cdmp-floating-toast__message">
                    {floatingToast.message}
                </p>
            </div>

            {/* Allow the user to close the popup manually. */}
            <button
                type="button"
                className="cdmp-floating-toast__close"
                onClick={() => setFloatingToast(null)}
                aria-label="Dismiss notification"
            >
                ×
            </button>
        </div>
    );
}

export default NotificationManager;
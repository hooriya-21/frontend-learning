import { getCurrentUser } from "../../utils/auth";
import { mockProfiles } from "../../data/profile/profile.Mock";


import PageHeader from "../../components/common/PageHeader/PageHeader";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input/Input";

import ProfileIcon, { ShieldIcon, LocationIcon, ModuleIcon, ClockIcon } from "../../components/common/ProfileIcons/ProfileIcon";
import LockIcon from "../../components/common/ProfileIcons/LockIcon";

import "./profile.css";

function Profile() {
    console.log("[Profile] Page loaded.");
    const currentUser = getCurrentUser();

    const profile = mockProfiles.find(
    (profile) => profile.id === currentUser?.id
    );

    return (
        <div className="profile-page">
            <PageHeader
                title="Profile"
                description="View and manage your account details"
            />
            <div className="profile-content">
                {/* Personal Information Card */}
                <Card 
                    title={
                        <div className="card-header-badge-title">
                            {/* Icon Badge */}
                            <div className="card-icon-badge">
                                <ProfileIcon size={20} />
                            </div>

                            {/* Title & Subtitle Group */}
                            <div>
                                <h3 className="card-heading">Personal Information</h3>
                                <p className="card-subtitle">Your basic account details</p>
                            </div>
                        </div>
                    }
                >
                    <div className="profile-section">
                        <Input
                            label="Full Name"
                            value={profile.fullName}
                            disabled
                        />
                        <Input
                            label="Email Address"
                            value={profile.email}
                            disabled
                        />  
                        <Input
                            label="User ID"
                            value={profile.userId}
                            disabled
                        />
                        <Input
                            label="Phone Number"
                            value={profile.phoneNumber}
                            disabled
                        />
                    </div>
                </Card>

                {/* Role & Access Card */}
                <Card
                    title={
                        <div className="card-header-badge-title">
                            {/* Icon Badge */}
                            <div className="card-icon-badge">
                                <LockIcon size={20} />
                            </div>

                            {/* Title & Subtitle Group */}
                            <div>
                                <h3 className="card-heading">Role & Access</h3>
                                <p className="card-subtitle">Your role and location access</p>
                            </div>
                        </div>
                    }
                >    
                {/* Account Access Summary */}
                    <div className="profile-access-section">
                        <Input
                            label="Role"
                            value={profile.role}
                            disabled
                        />
                        <Input
                            label="Jurisdiction / District" 
                            value={profile.jurisdiction}
                            disabled
                        />
                        <Input
                            label="Police Station"
                            value={profile.policeStation}
                            disabled
                        />
                    </div>
                </Card>

                {/* Account Access Summary Card */}
                <Card
                    className="account-summary-card"
                    title={
                        <div className="card-header-badge-title">
                            <div className="card-icon-badge">
                                <ShieldIcon size={20} />
                            </div>
                            <div>
                                <h3 className="card-heading">Account Access Summary</h3>
                                <p className="card-subtitle">Your current permissions and access details</p>
                            </div>
                        </div>
                    }
                    actions={
                        <span className={`badge-${profile.status.toLowerCase()}`}>
                            ● {profile.status}
                             </span>
                    }
                >
                    <div className="account-summary-grid">
                        <div className="summary-item">
                            <div className="summary-icon">
                                <ProfileIcon size={18} />
                            </div>
                            <div>
                                <span className="summary-label">Role</span>
                                <p className="summary-value">{profile.role}</p>
                            </div>
                        </div>

                        <div className="summary-item">
                            <div className="summary-icon">
                                <LocationIcon size={18} />
                            </div>
                            <div>
                                <span className="summary-label">District Access</span>
                                <p className="summary-value">{profile.jurisdiction}</p>
                            </div>
                        </div>

                        <div className="summary-item">
                            <div className="summary-icon">
                                <ModuleIcon size={18} />
                            </div>
                            <div>
                                <span className="summary-label">Module Access</span>
                                <p className="summary-value">{profile.moduleAccess}</p>
                            </div>
                        </div>

                        <div className="summary-item">
                            <div className="summary-icon">
                                <ClockIcon size={18} />
                            </div>
                            <div>
                                <span className="summary-label">Last Login</span>
                                <p className="summary-value">01 Oct 2026, 10:45 AM</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Profile;
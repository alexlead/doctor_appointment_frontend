import * as React from 'react';
import ProfileForm from '../components/Dashboard/ProfileForm';

interface IDashboardProfileProps {
}

const DashboardProfile: React.FunctionComponent<IDashboardProfileProps> = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1 className='text-primary my-4'>My Profile</h1>
        <ProfileForm />
      </div>
    </div>
  );
};

export default DashboardProfile;

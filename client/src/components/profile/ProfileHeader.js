import React, { Component } from 'react';

import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {

  render() {

    const { profile } = this.props;
 return (

      <div className="row">

        <div className="col-md-12">

          <div className="card card-body bg-info text-white mb-3">

            <div className="row">

              <div className="col-4 col-md-3 m-auto">

                <img

                  className="rounded-circle"

                  src={profile.user.avatar}

                  alt=""

                />

              </div>

            </div>

            <div className="text-center">

              <h1 className="display-4 text-center">{profile.user.name}</h1>

              <p className="lead text-center">

                {profile.status}{' '}

                {isEmpty(profile.company) ? null : (

                  <span>at {profile.company}</span>

                )}

              </p>

              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}

              <p>

                {isEmpty(profile.website) ? null : (

                  <a

                    className="text-white p-2"

                    href={profile.website}

                    target="_blank"

                  >

                    <i className="fas fa-globe fa-2x" />

                  </a>

                )}



                {isEmpty(profile.contact && profile.contact.phone) ? null : (

                  <a

                    className="text-white p-2"

                    href={profile.contact.phone}

                    target="_blank"

                  >

                    <i className="fab fa-phone fa-2x" />

                  </a>

                )}



                {isEmpty(profile.contact && profile.contact.email) ? null : (

                  <a

                    className="text-white p-2"

                    href={profile.contact.email}

                    target="_blank"

                  >

                    <i className="fab fa-email fa-2x" />

                  </a>

                )}
                 >

             </p>

            </div>

          </div>

        </div>

      </div>

    );

  }

}



export default ProfileHeader;
import React from 'react'

export default function Profile() {
    return (
        <>
            <div>
                <div class="personal-details">
                    <h2>Your Personal Details</h2>
                    <p>Basic info, that you can use on XYZ</p>
                    <div class="details-row">
                        <span class="detail-label">Name</span>
                        <span class="detail-value">HIMANSHU SINGH</span>
                    </div>
                    <div class="details-row">
                        <span class="detail-label">PAN</span>
                        <span class="detail-value">NUAPS6438L</span>
                    </div>
                    <div class="details-row">
                        <span class="detail-label">Aadhar</span>
                        <span class="detail-value">56782246856</span>
                    </div>
                    <div class="details-row">
                        <span class="detail-label">Status</span>
                        <span class="detail-value">Resident</span>
                    </div>
                    <div class="details-row">
                        <span class="detail-label">Date of Birth</span>
                        <span class="detail-value">31/03/2002</span>
                    </div>
                    <div class="details-row">
                        <span class="detail-label">Gender</span>
                        <span class="detail-value">Male</span>
                    </div>
                </div>

                <div class="personal-details">
                    <h2>Address & Contact</h2>
                    <p>Let's gather up to date contact details here</p>
                    <div class="details-row">
                        <span class="detail-label">Address</span>
                        <span class="detail-value"><i>Missing</i></span>
                    </div>
                    <div class="details-row">
                        <span class="detail-label">Mobile</span>
                        <span class="detail-value"><i>Missing</i></span>
                    </div>
                    <div class="details-row">
                        <span class="detail-label">Email</span>
                        <span class="detail-value"><i>Missing</i></span>
                    </div>
                </div>

            </div>
        </>
    )
}

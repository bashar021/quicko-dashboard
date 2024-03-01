import React from 'react'

export default function Taxreturn() {
    return (
        <div id='taxReturnContainer'>
            <div id='currentTaxReturn'>
                <div id='currentTaxReturnTitleBox'>
                    <h4>Current Tax Return </h4>
                    <p className='grey'>Your incomes, deductions & tax credits assessed for the current assessment year AY 2023-24</p>
                </div>
                <div id='currentTaxReturnStatusBoc'>
                    <div>
                        <p className='grey'>AY 2023-24</p>
                        <p className='lightGrey'>Year</p>
                    </div>
                    <div>
                        <p className='lightOrange'>not started</p>
                        <p className='lightGrey'>status</p>
                    </div>
                </div>
            </div>
            <div id='pastTaxReturn'>
                <div id='pastTaxReturnTitleBox'>
                    <h4>Past Tax Return </h4>
                    <p className='grey'>Access your previous year ITRs</p>
                </div>
                <div className='pastTaxItemBoxes'>
                    <div>
                        <p className='grey'>AY 2022-23</p>
                        <p className='lightGrey'>Year</p>
                    </div>
                    <div>
                        <p className='lightOrange'>not started</p>
                        <p className='lightGrey'>status</p>
                    </div>
                    <div>
                        <p className='lightGrey'>unknown</p>
                        <p className='lightGrey'>Form</p>
                    </div>

                </div>
                <div className='pastTaxItemBoxes'>
                    <div>
                        <p className='grey'>AY 2021-22</p>
                        <p className='lightGrey'>Year</p>
                    </div>
                    <div>
                        <p className='lightGrey'>unknown</p>
                        <p className='lightGrey'>status</p>
                    </div>
                    <div>
                        <p className='lightGrey'>unknown</p>
                        <p className='lightGrey'>Form</p>
                    </div>


                </div>
                <div className='pastTaxItemBoxes'>
                <div>
                        <p className='grey'>AY 2020-21</p>
                        <p className='lightGrey'>Year</p>
                    </div>
                    <div>
                        <p className='lightGrey'>unknown</p>
                        <p className='lightGrey'>status</p>
                    </div>
                    <div>
                        <p className='lightGrey'>unknown</p>
                        <p className='lightGrey'>Form</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

"use client";

import React, { useMemo, useState } from "react";

const MIN_LOAN = 100000;
const MAX_LOAN = 1326000;
const MIN_DOWN = 0;
const MAX_DOWN = 1226000;
const MIN_DURATION = 12;
const MAX_DURATION = 84;

// 10.5% annual interest
const ANNUAL_RATE = 0.105;
const MONTHLY_RATE = ANNUAL_RATE / 12;

function calculateEmi(principal: number, months: number): number {
  if (months <= 0 || principal <= 0) return 0;
  const r = MONTHLY_RATE;
  const pow = Math.pow(1 + r, months);
  const emi = (principal * r * pow) / (pow - 1);
  return Math.round(emi);
}

const PriceCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(1060800); // like screenshot
  const [downPayment, setDownPayment] = useState(265200);
  const [duration, setDuration] = useState(66); // months

  const principal = useMemo(
    () => Math.max(loanAmount - downPayment, 0),
    [loanAmount, downPayment]
  );

  const emi = useMemo(
    () => calculateEmi(principal, duration),
    [principal, duration]
  );

  return (
    <div className="calculator emi-calculator">
      {/* Top header: Check Eligibility + close */}
      <div className="emi-header">
        <h2 className="emi-header-title">Check Eligibility</h2>
        <button className="emi-close-btn" aria-label="Close">
          ✕
        </button>
      </div>

      <div className="emi-body">
        <h3 className="emi-title">EMI Calculator</h3>

        {/* Loan Amount */}
        <div className="field">
          <div className="field-label-row">
            <label>Loan Amount</label>
            <span className="field-value field-value-accent">
              ₹ {loanAmount.toLocaleString("en-IN")}
            </span>
          </div>
          <input
            type="range"
            min={MIN_LOAN}
            max={MAX_LOAN}
            step={10000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
          <div className="field-range">
            <span>₹ 1,00,000</span>
            <span>₹ 13,26,000</span>
          </div>
        </div>

        {/* Down Payment */}
        <div className="field">
          <div className="field-label-row">
            <label>Down Payment*</label>
            <span className="field-value field-value-accent">
              ₹ {downPayment.toLocaleString("en-IN")}
            </span>
          </div>
          <input
            type="range"
            min={MIN_DOWN}
            max={MAX_DOWN}
            step={10000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
          <div className="field-range">
            <span>₹ 0</span>
            <span>₹ 12,26,000</span>
          </div>
        </div>

        {/* Duration of Loan */}
        <div className="field">
          <div className="field-label-row">
            <label>Duration of Loan</label>
            <span className="field-value field-value-accent">
              {duration} Months
            </span>
          </div>
          <input
            type="range"
            min={MIN_DURATION}
            max={MAX_DURATION}
            step={6}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
          <div className="field-range">
            <span>12 Months</span>
            <span>84 Months</span>
          </div>
        </div>

        {/* EMI result */}
        <div className="emi-result">
          <span className="emi-amount">
            ₹ {emi.toLocaleString("en-IN")}
          </span>
          <span className="emi-per-month">per month</span>
        </div>

        {/* Loan breakup row */}
        <button className="emi-breakup" type="button">
          <span className="emi-breakup-icon">📊</span>
          <span>View Loan Breakup</span>
        </button>

        {/* Big CTA button */}
        <button className="primary-btn emi-btn" type="button">
          <span className="emi-btn-icon">🟡</span>
          <span>Check eligibility</span>
        </button>

        {/* Footnote text */}
        <p className="emi-note">
          *Rate of interest can vary subject to credit profile. Loan approval is
          at the sole discretion of the finance partner.
          <br />
          **Processing fee and other loan charges are not included.
        </p>
      </div>
    </div>
  );
};

export default PriceCalculator;

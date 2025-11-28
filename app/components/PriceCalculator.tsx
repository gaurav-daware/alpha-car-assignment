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

function formatCurrency(value: number): string {
  return `₹ ${value.toLocaleString("en-IN")}`;
}

function getSliderBackground(value: number, min: number, max: number): string {
  const percentage = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, #6c2bd9 0%, #6c2bd9 ${percentage}%, #e5d5ff ${percentage}%, #e5d5ff 100%)`;
}

const PriceCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(1060800);
  const [downPayment, setDownPayment] = useState(265200);
  const [duration, setDuration] = useState(66);
  const [showBreakup, setShowBreakup] = useState(false);

  const principal = useMemo(
    () => Math.max(loanAmount - downPayment, 0),
    [loanAmount, downPayment]
  );

  const emi = useMemo(
    () => calculateEmi(principal, duration),
    [principal, duration]
  );

  const totalPayment = emi * duration;
  const totalInterest = totalPayment - principal;

  return (
    <div className="emi-calculator">
      {/* Header */}
      <div className="emi-header">
        <h2 className="emi-header-title">EMI Calculator</h2>
      </div>

      <div className="emi-body">
        {/* Loan Amount */}
        <div className="field">
          <div className="field-label-row">
            <label>Loan Amount</label>
            <span className="field-value-accent">
              {formatCurrency(loanAmount)}
            </span>
          </div>
          <input
            type="range"
            min={MIN_LOAN}
            max={MAX_LOAN}
            step={10000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            style={{
              background: getSliderBackground(loanAmount, MIN_LOAN, MAX_LOAN),
            }}
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
            <span className="field-value-accent">
              {formatCurrency(downPayment)}
            </span>
          </div>
          <input
            type="range"
            min={MIN_DOWN}
            max={MAX_DOWN}
            step={10000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            style={{
              background: getSliderBackground(downPayment, MIN_DOWN, MAX_DOWN),
            }}
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
            <span className="field-value-accent">{duration} Months</span>
          </div>
          <input
            type="range"
            min={MIN_DURATION}
            max={MAX_DURATION}
            step={6}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            style={{
              background: getSliderBackground(
                duration,
                MIN_DURATION,
                MAX_DURATION
              ),
            }}
          />
          <div className="field-range">
            <span>12 Months</span>
            <span>84 Months</span>
          </div>
        </div>

        {/* EMI Result */}
        <div className="emi-result">
          <span className="emi-amount">{formatCurrency(emi)}</span>
          <span className="emi-per-month">per month</span>
        </div>

        {/* Loan Breakup */}
        <button
          className="emi-breakup"
          onClick={() => setShowBreakup(!showBreakup)}
          type="button"
        >
          <span>📊</span>
          <span>{showBreakup ? "Hide" : "View"} Loan Breakup</span>
        </button>

        {showBreakup && (
          <div className="emi-breakup-details">
            <div className="breakup-row">
              <span className="breakup-label">Principal Amount:</span>
              <span className="breakup-value">{formatCurrency(principal)}</span>
            </div>
            <div className="breakup-row">
              <span className="breakup-label">Total Interest:</span>
              <span className="breakup-value">
                {formatCurrency(totalInterest)}
              </span>
            </div>
            <div className="breakup-row">
              <span>Total Payment:</span>
              <span className="breakup-total">
                {formatCurrency(totalPayment)}
              </span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <button className="primary-btn" type="button">
          <span>✓</span>
          <span>Check Eligibility</span>
        </button>

        {/* Footnote */}
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
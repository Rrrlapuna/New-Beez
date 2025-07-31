'use client';

const categories = [
  'Compliance Audit', 'Due Diligence Audit', 'Forensic Audit', 'Information System Audit', 'Internal Audit',
  'Management Audit', 'Risk Assurance', 'Statutory Audit', 'Stock Audit', 'Tax Audit', 'Corporate Tax Compliance',
  'GST Registration and Filing', 'Income Tax Filing', 'International Taxation', 'Litigation and Dispute Resolution',
  'NRI Taxation', 'Tax Advisory and Planning', 'Tax Refunds and Appeals', 'TDS Compliance and Returns',
  'Transfer Pricing', 'Business Restructuring', 'Company Incorporation', 'Corporate Governance Advisory',
  'ESOP Structuring', 'FEMA and RBI Compliance', 'LLP Formation and Compliance', 'ROC Filing and Annual Returns',
  'Secretarial Compliance', 'Share Valuation and Compliance', 'Winding Up and Closure',
  'Accounts Payable and Receivable', 'Budgeting and Forecasting', 'CFO Services', 'Cloud Accounting Solutions',
  'Fixed Asset Accounting', 'MIS Reports and Dashboards', 'Monthly Financial Reporting', 'Outsourced Accounting',
  'Payroll Processing', 'Reconciliation Services', 'GST Advisory and Planning', 'GST Audit',
  'GST Compliance Review', 'GST E-Way Bill Management', 'GST Impact Analysis', 'GST Input Credit Management',
  'GST Litigation and Appeals', 'GST Refund Assistance', 'GST Registration', 'GST Return Filing',
  'Business Valuation', 'Debt Restructuring', 'Investment Advisory', 'IPO and Fundraising Advisory',
  'Mergers and Acquisitions', 'Private Equity and Venture Capital Advisory',
  'Project Finance and Loan Syndication', 'Risk Management Services', 'Start-up Financial Planning',
  'Working Capital Management', 'Business Formation and Registration', 'Cost Control and Reduction',
  'Expansion and Diversification Planning', 'Funding and Investment Strategy', 'Government Incentives and Subsidies',
  'Pitch Deck and Business Plan', 'SOP Development for Businesses', 'Startup India Registration',
  'Tax and Legal Compliance', 'Virtual CFO Services'
];

export default function Catalogue() {
  return (
    <div className="w-full mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-[#004274] mb-6">Catalogue</h2>
      <div className="flex flex-wrap gap-1">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-md flex items-center whitespace-nowrap min-w-max hover:bg-[#004274] hover:text-white transition relative"
          >
            <span
              className={`absolute left-0 top-0 h-full w-1 ${index % 2 === 0 ? 'bg-[#004274]' : 'bg-[#ed7d31]'}`}
            />
            <span className="pl-2">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

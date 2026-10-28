export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  /** Cover photo URL. When omitted, a branded cover is drawn for the category. */
  image?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const articles: BlogPost[] = [
  {
    id: 1,
    slug: "understanding-nigerian-business-law",
    title: "Understanding Nigerian Business Law: A Guide for Foreign Investors",
    excerpt:
      "A comprehensive overview of the legal framework governing foreign investment in Nigeria, including company registration, tax obligations, and regulatory compliance.",
    content: `
      <p>Nigeria, as one of Africa's largest economies, offers immense opportunities for foreign investors. However, navigating the legal landscape can be complex without the right guidance. This article provides a comprehensive overview of the key legal considerations for doing business in Nigeria.</p>
      
      <h3>1. Company Registration and Structure</h3>
      <p>The Corporate Affairs Commission (CAC) is the primary body responsible for regulating the formation and management of companies in Nigeria. The Companies and Allied Matters Act (CAMA) 2020 introduced significant changes to simplify the registration process.</p>
      <p>Foreign investors can register a private limited company (Ltd) or a public limited company (PLC). It is crucial to understand the minimum share capital requirements, which vary depending on the sector. For instance, companies with foreign participation generally require a minimum share capital of N10,000,000.</p>

      <h3>2. The NIPC Registration</h3>
      <p>After incorporation, foreign-owned companies must register with the Nigerian Investment Promotion Commission (NIPC). This registration is vital for obtaining business permits and expatriate quotas.</p>

      <h3>3. Tax Obligations</h3>
      <p>Understanding Nigeria's tax regime is essential. Key taxes include:</p>
      <ul>
        <li><strong>Companies Income Tax (CIT):</strong> Levied on the profits of registered companies.</li>
        <li><strong>Value Added Tax (VAT):</strong> Charged on the supply of goods and services.</li>
        <li><strong>Education Tax:</strong> A tax allocated for the development of the education sector.</li>
      </ul>
      <p>Recent Finance Acts have introduced incentives for certain sectors, which investors should leverage.</p>

      <h3>4. Regulatory Compliance</h3>
      <p>Depending on the industry, specific regulatory approvals may be required. For example:</p>
      <ul>
        <li><strong>NAFDAC:</strong> For food and drug products.</li>
        <li><strong>SON:</strong> For standardisation of products.</li>
        <li><strong>DPR/NUPRC:</strong> For the oil and gas sector.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>While the Nigerian business environment presents challenges, the legal framework is designed to protect and encourage foreign investment. Engaging with experienced legal counsel is the first step towards a successful entry into the Nigerian market.</p>
    `,
    author: "Oluwole Kolawole",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Corporate Law",
    tags: [
      "Business Law",
      "Foreign Investment",
      "Corporate Governance",
      "Nigeria",
    ],
  },
  {
    id: 2,
    slug: "immigration-updates-cerpac-2025",
    title: "Immigration Updates: New CERPAC Requirements for 2025",
    excerpt:
      "Important changes to the Combined Expatriate Residence Permit and Aliens Card (CERPAC) process and what foreign nationals need to know.",
    content: `
      <p>The Nigeria Immigration Service (NIS) has recently announced updates to the Combined Expatriate Residence Permit and Aliens Card (CERPAC) guidelines, effective from January 2025. These changes are aimed at digitizing the process and enhancing national security.</p>

      <h3>Key Changes to Note</h3>
      <p><strong>1. Biometric Data Capture:</strong> The new guidelines emphasize stricter biometric data capture at all entry points and renewal centers. Ensure your physical presence is available for these updates.</p>
      
      <p><strong>2. Increased Fees:</strong> There has been a slight adjustment in the official fees for CERPAC issuance and renewal. Companies employing expatriates should update their budgets accordingly.</p>
      
      <p><strong>3. Validity Period:</strong> While the standard validity remains two years for most categories, certain special permits now have different validity periods tied to the specific project duration.</p>

      <h3>Compliance Steps for Employers</h3>
      <p>Employers must ensure that their expatriate quota returns are filed monthly. Failure to comply with the monthly returns can lead to the revocation of the quota and inability to renew CERPACs.</p>

      <h3>Conclusion</h3>
      <p>Staying compliant with immigration laws is critical for the smooth operation of businesses employing expatriates. We recommend an immediate audit of all expatriate documents to ensure alignment with the new 2025 regulations.</p>
    `,
    author: "Aniefiok Ekanem",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Immigration",
    tags: ["Immigration", "CERPAC", "Expatriates", "Compliance"],
  },
  {
    id: 3,
    slug: "energy-sector-reforms-investors",
    title: "Energy Sector Reforms: Implications for Investors",
    excerpt:
      "An analysis of recent reforms in Nigeria's energy sector and their impact on current and prospective investors in oil, gas, and renewable energy.",
    content: `
      <p>The Petroleum Industry Act (PIA) has fundamentally shifted the landscape of Nigeria's energy sector. This article explores the implications of these ongoing reforms for investors in both the traditional oil and gas sectors and the emerging renewable energy market.</p>

      <h3>The Petroleum Industry Act (PIA)</h3>
      <p>The PIA provides a legal, governance, regulatory, and fiscal framework for the Nigerian petroleum industry. Key takeaways include:</p>
      <ul>
        <li><strong>Commercialization of NNPC:</strong> The transformation of NNPC into a limited liability company focuses on profit and efficiency.</li>
        <li><strong>Host Community Development Trusts:</strong> Companies are now mandated to contribute to the development of host communities, fostering better relationships and stability.</li>
      </ul>

      <h3>Renewable Energy Opportunities</h3>
      <p>Beyond oil and gas, Nigeria is aggressively pursuing renewable energy to solve its power deficit. The Electricity Act 2023 allows states to generate, transmit, and distribute electricity, opening up the market for decentralized power solutions like solar mini-grids.</p>

      <h3>Conclusion</h3>
      <p>The energy sector remains the backbone of Nigeria's economy. The current reforms aim to increase transparency and attract patient capital. Investors who understand these new rules will be best positioned to reap significant returns.</p>
    `,
    author: "Funmi Joseph",
    date: "November 28, 2024",
    readTime: "10 min read",
    category: "Energy Law",
    tags: ["Energy", "Oil and Gas", "Renewable Energy", "PIA"],
  },
  {
    id: 4,
    slug: "property-title-perfection-fct-lagos",
    title: "Property Title Perfection in FCT and Lagos: A Comparative Analysis",
    excerpt:
      "Understanding the differences in property title registration between the Federal Capital Territory and Lagos State, and best practices for perfection.",
    content: `
      <p>Securing a valid title to landed property is the most critical step in real estate transactions. However, the process of "perfecting" this title differs significantly between Nigeria's commercial hub, Lagos, and its political capital, the FCT.</p>

      <h3>Lagos State: The Land Registry</h3>
      <p>In Lagos, the process is digitized to an extent. The key steps include:</p>
      <ol>
        <li>Obtaining the Governor's Consent.</li>
        <li>Stamping the Deed of Assignment.</li>
        <li>Registration at the Land Registry.</li>
      </ol>
      <p>Lagos is known for its relatively higher fees but has made strides in speeding up the consent process.</p>

      <h3>Federal Capital Territory (FCT)</h3>
      <p>In Abuja, land administration is under the Abuja Geographic Information Systems (AGIS). The process involves:</p>
      <ol>
        <li>Application for Regularisation of Land Titles.</li>
        <li>Payment of statutory fees to AGIS.</li>
        <li>Issuance of the Certificate of Occupancy (C of O).</li>
      </ol>

      <h3>Why Perfection Matters</h3>
      <p>An unperfected title renders the document inadmissible in court to prove ownership and prevents the property from being used as collateral for loans.</p>

      <h3>Conclusion</h3>
      <p>Whether in Lagos or Abuja, due diligence and prompt perfection of title are non-negotiable for securing your real estate investment.</p>
    `,
    author: "Gbenga Lamina",
    date: "November 15, 2024",
    readTime: "7 min read",
    category: "Property Law",
    tags: ["Real Estate", "Property Law", "Lagos", "Abuja"],
  },
  {
    id: 5,
    slug: "labour-law-compliance-employers",
    title: "Labour Law Compliance: Essential Guide for Employers",
    excerpt:
      "Key considerations for employers under the Nigerian Labour Act, including employee rights, termination procedures, and dispute resolution.",
    content: `
      <p>Employment relationships in Nigeria are governed primarily by the Labour Act, along with the contracts of employment. Employers must be vigilant to avoid costly litigation.</p>

      <h3>Key Employer Obligations</h3>
      <ul>
        <li><strong>Written Contracts:</strong> Employers must provide a written contract of employment within three months of the commencement of employment.</li>
        <li><strong>Wages and Deductions:</strong> Wages must be paid in legal tender, and unauthorized deductions are prohibited.</li>
        <li><strong>Leave Entitlements:</strong> Employees are entitled to annual leave, sick leave, and maternity leave as stipulated by law.</li>
      </ul>

      <h3>Termination of Employment</h3>
      <p>The National Industrial Court has ruled that employers must state the reason for termination in certain cases, moving away from the old "hire and fire" doctrine. Proper notice or salary in lieu of notice is mandatory.</p>

      <h3>Conclusion</h3>
      <p>A proactive approach to labour law compliance, including having a robust Employee Handbook, protects the company and fosters a positive work environment.</p>
    `,
    author: "Evelyn M. Kolawole",
    date: "November 5, 2024",
    readTime: "6 min read",
    category: "Labour Law",
    tags: ["Employment", "Labour Act", "HR Compliance", "Workplace"],
  },
  {
    id: 6,
    slug: "consumer-protection-rights-nigeria",
    title: "Consumer Protection: Your Rights Under Nigerian Law",
    excerpt:
      "An overview of consumer rights and protections available under Nigerian law, and how to seek redress for violations.",
    content: `
      <p>The Federal Competition and Consumer Protection Act (FCCPA) has empowered Nigerian consumers like never before. This article outlines your fundamental rights and how to enforce them.</p>

      <h3>Fundamental Consumer Rights</h3>
      <ul>
        <li><strong>Right to Information:</strong> Consumers must be given clear and accurate information about goods and services.</li>
        <li><strong>Right to Safety:</strong> Goods must be safe for use and meet standard requirements.</li>
        <li><strong>Right to Choice:</strong> Consumers should not be compelled to purchase specific products (bundling).</li>
        <li><strong>Right to Redress:</strong> Mechanisms must exist to resolve complaints fairly.</li>
      </ul>

      <h3>Seeking Redress</h3>
      <p>If your rights are violated, you can report to the Federal Competition and Consumer Protection Commission (FCCPC). The Commission has the power to investigate and sanction erring businesses.</p>

      <h3>Conclusion</h3>
      <p>Awareness is power. Knowing your rights as a consumer helps drive accountability and quality in the Nigerian marketplace.</p>
    `,
    author: "Oluwole Kolawole",
    date: "October 20, 2024",
    readTime: "5 min read",
    category: "Consumer Protection",
    tags: ["Consumer Rights", "FCCPA", "Legal Redress", "Commerce"],
  },
];

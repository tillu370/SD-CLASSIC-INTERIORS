export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export interface GuideStep {
  number: string;
  title: string;
  blocks: GuideBlock[];
}

export const GUIDE_INTRO: GuideBlock[] = [
  { type: 'p', text: 'Thank you for choosing SD Classic Interiors.' },
  {
    type: 'p',
    text: 'At SD Classic Interiors, we believe every successful interior project begins with thoughtful planning, clear communication, and quality execution.',
  },
  {
    type: 'p',
    text: 'This guide provides a clear overview of our project process, material specifications, design stages, execution methods, payment process, and workmanship warranty, helping you understand what to expect throughout your interior journey.',
  },
  {
    type: 'p',
    text: 'We appreciate your trust and look forward to creating a space that reflects your vision with quality, precision, and care.',
  },
];

export const GUIDE_WORKFLOW: string[] = [
  'Interior Package Selection',
  'Site Visit & Consultation',
  'Detailed Quotation & 2D Floor Plan',
  'Quotation Discussion & Approval',
  'Token Advance',
  '3D Design & Visualization',
  'Final Design Approval',
  'Work Order',
  'Project Execution',
  'Quality Inspection & Handover',
  'Workmanship Warranty',
];

export const GUIDE_STEPS: GuideStep[] = [
  {
    number: '01',
    title: 'Interior Package Selection',
    blocks: [
      {
        type: 'p',
        text: 'Selecting the right interior package is the first step in planning your project. Our packages are designed to suit different budgets while maintaining quality, durability, and craftsmanship.',
      },
      { type: 'ul', items: ['Economy Series', 'Premium Series', 'Luxury Series'] },
      {
        type: 'p',
        text: 'Each package includes: Board Specifications, Laminate Specifications, Hardware Specifications, Brand Specifications and Package Pricing.',
      },
      {
        type: 'p',
        text: 'Selecting your preferred package before the site visit helps us prepare an accurate quotation based on your chosen package and project requirements.',
      },
      {
        type: 'p',
        text: 'For detailed package specifications and pricing, please refer to the Package Guide Document shared along with this document.',
      },
    ],
  },
  {
    number: '02',
    title: 'Site Visit & Consultation',
    blocks: [
      { type: 'p', text: 'Once you have selected your preferred package, we will schedule a site visit at your convenience.' },
      {
        type: 'ul',
        items: [
          'Inspect the project site.',
          'Take accurate site measurements.',
          'Understand your design preferences and functional requirements.',
          'Help you select the most suitable interior package based on your budget, preferences, and project needs.',
          'Discuss space planning and functionality.',
          'Evaluate the overall project requirements.',
          'Prepare the most suitable design and quotation based on the site conditions and project discussions.',
        ],
      },
      { type: 'p', text: 'Site Visit & Consultation Fee: ₹ ____' },
      {
        type: 'p',
        text: 'The Site Visit & Consultation Fee will be adjusted against the final project quotation upon order confirmation.',
      },
    ],
  },
  {
    number: '03',
    title: 'Detailed Quotation & 2D Floor Plan',
    blocks: [
      {
        type: 'p',
        text: 'Based on the selected package, site measurements, and project discussions, we will prepare a detailed quotation along with a 2D floor plan.',
      },
      {
        type: 'p',
        text: 'Your quotation includes: item-wise cost breakdown, detailed measurements, quantity calculations, material specifications, brand specifications, pricing details, payment terms, workmanship warranty, and important notes & conditions.',
      },
      {
        type: 'p',
        text: 'The 2D floor plan includes: furniture layout, space planning, functional circulation, and room layout.',
      },
      {
        type: 'p',
        text: 'The detailed quotation and 2D floor plan provide a clear understanding of the proposed work, material specifications, project cost, and payment terms, enabling you to review and proceed with confidence.',
      },
    ],
  },
  {
    number: '04',
    title: 'Quotation Discussion & Approval',
    blocks: [
      {
        type: 'p',
        text: 'Once the quotation and 2D floor plan have been shared and reviewed by you, we will schedule a discussion to explain the quotation, clarify any queries, finalize the project scope, and obtain your approval before proceeding to the design stage.',
      },
      {
        type: 'ul',
        items: [
          'Explain the quotation, specifications, and project details.',
          'Review the proposed layout and specifications.',
          'Clarify any questions regarding the quotation, materials, pricing, or project scope.',
          'Discuss any changes or additional requirements, if necessary.',
          'Finalize the project scope and specifications.',
          'Obtain your approval before proceeding to the design stage.',
        ],
      },
      {
        type: 'p',
        text: 'This discussion ensures complete clarity on the project scope, specifications, and pricing, enabling both parties to proceed confidently to the design stage.',
      },
    ],
  },
  {
    number: '05',
    title: 'Token Advance',
    blocks: [
      { type: 'p', text: 'A Token Advance is required to confirm your project and initiate the design process.' },
      {
        type: 'ul',
        items: [
          'Confirm your project with SD Classic Interiors.',
          'Schedule the 3D design and visualization process.',
          'Begin design planning based on the approved quotation and project requirements.',
          'Provide guidance for any required civil or electrical modifications before project execution.',
          'Coordinate the upcoming stages of the project until final design approval.',
        ],
      },
      {
        type: 'p',
        text: 'The Token Advance confirms your project and enables us to dedicate our design resources towards creating a well-planned and customized interior solution.',
      },
    ],
  },
  {
    number: '06',
    title: '3D Design & Visualization',
    blocks: [
      {
        type: 'p',
        text: 'Once the Token Advance is received, our design team will begin the design development process based on the approved quotation, site measurements, and your project requirements.',
      },
      {
        type: 'ul',
        items: [
          'Prepare realistic 3D interior visualizations.',
          'Develop the interior concept based on your requirements and selected package.',
          'Finalize furniture layouts, space planning, and design details.',
          'Assist you in selecting laminates, colours, finishes, hardware, and other material options.',
          'Refine the design based on your feedback to achieve the desired appearance and functionality.',
          'Develop additional design ideas, aesthetic enhancements, and practical solutions, wherever required, to improve the overall look, functionality, and value of the project.',
          "Recommend suitable add-ons, decorative elements, accessories, or functional improvements that complement the approved design. All such suggestions will be discussed with you during the design process.",
        ],
      },
      {
        type: 'p',
        text: 'The 3D Design & Visualization stage gives you a clear understanding of the proposed design, allowing you to review every detail and provide your feedback before the final design approval.',
      },
    ],
  },
  {
    number: '07',
    title: 'Final Design Approval',
    blocks: [
      {
        type: 'p',
        text: 'Once the 3D Design & Visualization is completed, we will present the final design for your review and approval.',
      },
      {
        type: 'ul',
        items: [
          'Review the complete 3D design, layouts, materials, colours, finishes, and specifications.',
          'Discuss and confirm any final modifications, if required.',
          'Review and approve any add-ons, accessories, or scope changes to be included in the project.',
          'Provide your final approval to proceed with the project.',
        ],
      },
      {
        type: 'p',
        text: 'After receiving your final approval, the design will be considered finalized and approved. The approved design will then proceed to the Work Order stage, where the complete project details will be documented for your confirmation before project execution begins.',
      },
    ],
  },
  {
    number: '08',
    title: 'Work Order',
    blocks: [
      {
        type: 'p',
        text: 'Once the final design is approved, we will prepare the Work Order based on the approved design, specifications, and mutually agreed project scope. The Work Order serves as the final execution document for your project and includes:',
      },
      {
        type: 'ul',
        items: [
          'Approved scope of work.',
          'Final material and brand specifications.',
          'Approved add-ons, design enhancements, and any mutually agreed scope changes discussed during the design stage.',
          'Final project value.',
          'Payment terms and payment schedule.',
          'Project execution timeline.',
          'Terms and conditions.',
          'Workmanship warranty details.',
        ],
      },
      {
        type: 'ul',
        items: [
          'Review the complete Work Order with you to ensure that all project details are accurate and mutually agreed upon.',
          'Explain the payment terms, payment schedule, project timeline, and execution process.',
          'Incorporate any mutually agreed changes, if required, before the Work Order is finalized.',
          'Obtain the signatures of both the Client and SD Classic Interiors as a mutual agreement before project execution begins.',
        ],
      },
      {
        type: 'p',
        text: 'Upon signing the Work Order, the Client shall make the agreed advance payment as per the payment terms, and follow the agreed payment schedule throughout the project to ensure smooth execution.',
      },
      {
        type: 'p',
        text: 'Upon receipt of the agreed advance payment, we will schedule the project, initiate material procurement, commence manufacturing (wherever applicable), and coordinate the site execution activities in accordance with the approved project schedule.',
      },
      {
        type: 'p',
        text: 'The signed Work Order serves as the official agreement between the Client and SD Classic Interiors, confirming the approved scope of work, specifications, selected materials, approved add-ons, payment terms, payment schedule, project timeline, workmanship warranty, and all other mutually agreed project conditions.',
      },
    ],
  },
  {
    number: '09',
    title: 'Project Execution',
    blocks: [
      {
        type: 'p',
        text: 'Upon completion of the Work Order formalities and receipt of the agreed advance payment, the project execution stage begins.',
      },
      {
        type: 'ul',
        items: [
          'Schedule the project execution activities in accordance with the approved project timeline.',
          'Procure the approved materials, hardware, and accessories as specified in the Work Order.',
          'Verify the quality and specifications of the materials before they are used for the project.',
          'Manufacture customized furniture and other components, wherever applicable.',
          'Carry out on-site fabrication, factory installation, or a combination of both, depending on the approved design and project requirements.',
          'Coordinate civil, electrical, painting, false ceiling, and other associated works, wherever applicable.',
          'Execute all work strictly in accordance with the approved design, specifications, materials, and quality standards.',
          'Monitor the progress of the project to ensure quality workmanship, timely execution, and proper coordination among all work activities.',
          'Keep you informed about the project progress and coordinate with you whenever approvals or clarifications are required during execution.',
          'Conduct regular quality inspections at every stage of the project to ensure that all work meets our quality standards before proceeding to the next stage.',
          'Complete all necessary adjustments, alignments, fittings, and finishing works to ensure the project is executed as per the approved specifications.',
        ],
      },
      {
        type: 'p',
        text: 'Throughout the execution stage, our team remains committed to delivering quality craftsmanship, attention to detail, and professional service, ensuring transparency, quality, and complete client satisfaction.',
      },
    ],
  },
  {
    number: '10',
    title: 'Quality Inspection & Handover',
    blocks: [
      {
        type: 'p',
        text: 'Upon completion of all execution activities, we will conduct a comprehensive inspection to ensure that the project has been completed in accordance with the approved Work Order, design, specifications, and quality standards before handing it over.',
      },
      {
        type: 'ul',
        items: [
          'Conduct a detailed quality inspection of the completed work.',
          'Verify that all approved materials, finishes, hardware, and accessories have been installed as per the Work Order.',
          'Check the functionality, alignment, fittings, and overall finishing of all completed works.',
          'Complete any minor adjustments or touch-ups, wherever required.',
          'Carry out a final walkthrough with you to review the completed project.',
          'Address any observations identified during the final inspection, wherever applicable.',
          'Obtain your acknowledgement of the completed work and project handover.',
          'Complete the final handover of the project along with the relevant project documents.',
        ],
      },
      {
        type: 'p',
        text: 'Project handover signifies the successful completion of the approved scope of work. The workmanship warranty shall commence from the date of project handover, in accordance with the terms and conditions specified in the Work Order.',
      },
    ],
  },
  {
    number: '11',
    title: 'Workmanship Warranty',
    blocks: [
      {
        type: 'p',
        text: 'At SD Classic Interiors, quality workmanship is the foundation of every project we undertake. We are committed to delivering professionally executed interiors with meticulous attention to detail, ensuring lasting quality, functionality, and customer satisfaction.',
      },
      {
        type: 'p',
        text: 'As part of our commitment to excellence and reliable after-sales support, we provide a Workmanship Warranty for eligible projects, giving our clients added confidence and peace of mind after project completion.',
      },
      {
        type: 'ul',
        items: [
          'Workmanship Warranty is provided for eligible projects based on the selected package.',
          'The applicable warranty period, coverage, and terms & conditions will be clearly specified in the Work Order.',
          'Coverage for workmanship-related defects arising from installation or execution under normal residential usage.',
          "Manufacturer warranties for branded materials, hardware, appliances, electrical accessories, and other third-party products shall be governed solely by the respective manufacturer's warranty policies.",
          'Even after the applicable workmanship warranty period, SD Classic Interiors will continue to provide support for maintenance, repairs, modifications, and additional works, wherever feasible, at applicable service charges.',
        ],
      },
      {
        type: 'p',
        text: 'Our Workmanship Warranty reflects our confidence in the quality of our workmanship and our commitment to building long-term relationships through dependable service, professional support, and customer satisfaction.',
      },
    ],
  },
];

export const GUIDE_MEASUREMENT: GuideBlock[] = [
  {
    type: 'p',
    text: 'At SD Classic Interiors, all woodwork quantities are calculated using standard measurement methods to ensure accuracy, transparency, and consistency.',
  },
  {
    type: 'ul',
    items: [
      'Frame Work — Formula: Width × Height (W × H)',
      'Sliding Door Wardrobes (Frame Work) — Formula: (Width × Height) × 1.2. A multiplication factor of 1.2 is applied to account for the additional materials and components required for the sliding door system.',
      'Box Work — Formula: [(Width + Depth) × (Height + Depth)] × 2. This formula is used to calculate box-type furniture by considering its width, height, and depth.',
    ],
  },
  {
    type: 'p',
    text: 'The applicable measurement formula is selected based on the furniture type and approved design. All measurements are verified before manufacturing and execution to ensure accurate quantity calculations.',
  },
];

export const GUIDE_ADDITIONAL_WORKS: GuideBlock[] = [
  {
    type: 'p',
    text: 'During the course of the project, you may wish to add new items or modify the approved design or scope of work. We are happy to accommodate such requests wherever feasible.',
  },
  {
    type: 'ul',
    items: [
      'Any additional work or modification requested after the Work Order has been finalized shall be treated as an additional scope of work.',
      'All additional works and design changes will be discussed with you before execution.',
      'A revised quotation or supplementary Work Order will be provided, wherever applicable.',
      'Additional works or design changes may result in revisions to the project cost, material requirements, and execution timeline.',
      'No additional work will be carried out without your approval.',
    ],
  },
  {
    type: 'p',
    text: 'Our objective is to maintain complete transparency while providing the flexibility to accommodate your evolving requirements throughout the project.',
  },
];

export const GUIDE_CLIENT_RESPONSIBILITIES: GuideBlock[] = [
  {
    type: 'p',
    text: "To ensure the smooth execution and timely completion of the project, we request the Client's cooperation in the following:",
  },
  {
    type: 'ul',
    items: [
      'Provide timely approvals for designs, material selections, and project-related decisions.',
      'Ensure the project site is accessible during the execution period.',
      'Provide uninterrupted electricity and water supply, wherever required for project execution.',
      'Make payments in accordance with the agreed payment schedule specified in the Work Order.',
      'Inform SD Classic Interiors of any changes or additional requirements before the execution of the respective work.',
      'Ensure that personal belongings and valuables are removed or adequately protected before the commencement of work.',
    ],
  },
  {
    type: 'p',
    text: 'Your cooperation throughout the project enables us to deliver quality workmanship, maintain the project schedule, and ensure a smooth and efficient execution process.',
  },
];

export const GUIDE_CLOSING: GuideBlock[] = [
  { type: 'p', text: 'Thank you for taking the time to review our Project Process & Client Information Guide.' },
  {
    type: 'p',
    text: 'We hope this guide has provided you with a clear understanding of our work process, quality standards, and commitment to transparency.',
  },
  {
    type: 'p',
    text: 'We look forward to the opportunity to work with you and create a space that reflects your vision with quality, precision, and care.',
  },
  { type: 'p', text: 'Thank you for considering SD Classic Interiors.' },
];

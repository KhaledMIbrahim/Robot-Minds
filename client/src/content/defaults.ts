import heroImage from '../assets/hero-robot.jpg'
import atlas from '../assets/robot-atlas.jpg'
import titan from '../assets/robot-titan.jpg'
import nomad from '../assets/robot-nomad.jpg'
import brainImage from '../assets/brain.jpg'

/**
 * Fallback copy/images for every editable spot on the home page. The admin
 * dashboard (client/src/pages/AdminContent.tsx) edits the same keys via
 * PUT /api/admin/content; whatever the backend has overrides these defaults
 * (see ContentContext). Keeping the originals here means the page still
 * looks right before an admin customizes anything, and "reset" is just
 * "delete the override".
 */
export const CONTENT_DEFAULTS: Record<string, string> = {
  'hero.badge': 'Now in early access',
  'hero.titleLine1': 'Robot',
  'hero.titleLine2': 'Minds',
  'hero.subtitle':
      'Intelligent humanoid robots for the future — machines that learn, adapt, and work alongside you.',
  // 'hero.image': heroImage,
  // 'hero.cta1': 'Discover Robot Mind',
  // 'hero.cta2': 'See the fleet',
  // 'hero.stat1Value': '3M+',
  // 'hero.stat1Label': 'Hours operated',
  // 'hero.stat2Value': '40+',
  // 'hero.stat2Label': 'Deployments',
  // 'hero.stat3Value': '99.9%',
  // 'hero.stat3Label': 'Uptime',

  'fleet.tag': 'Transform your world',
  'fleet.heading': 'Advanced humanoid robots that think, learn, and work alongside you.',
  'fleet.description':
      'Robot Minds is building embodied intelligence for the real world — machines with the perception, dexterity, and judgment to move through human spaces safely and calmly.',
  'fleet.sectionTag': 'Our robots',
  'fleet.sectionHeading': 'A fleet built for every frontier',
  'fleet.robot1.name': 'Atlas',
  'fleet.robot1.tag': 'Indoor mobility',
  'fleet.robot1.desc': 'Compact utility unit built for warehouse and lab floors.',
  'fleet.robot1.image': atlas,
  'fleet.robot2.name': 'Titan',
  'fleet.robot2.tag': 'Rugged terrain',
  'fleet.robot2.desc': 'Heavier build for outdoor delivery and inspection routes.',
  'fleet.robot2.image': titan,
  'fleet.robot3.name': 'Nomad',
  'fleet.robot3.tag': 'Long endurance',
  'fleet.robot3.desc': 'Extended battery life for remote and unattended missions.',
  'fleet.robot3.image': nomad,

  'capabilities.tag': 'Capabilities',
  'capabilities.heading': 'Engineered to sense, decide, and act',
  'capabilities.item1.title': 'Autonomy',
  'capabilities.item1.desc': 'Navigates dynamic spaces without remote piloting, replanning routes on the fly.',
  'capabilities.item2.title': 'Intelligence',
  'capabilities.item2.desc': 'Understands language, objects, and context to complete open-ended tasks.',
  'capabilities.item3.title': 'Safety & soft design',
  'capabilities.item3.desc': 'Compliant joints and force limiting keep it safe to work alongside.',
  'capabilities.item4.title': 'Dexterity',
  'capabilities.item4.desc': 'Multi-fingered hands manipulate everyday tools and irregular objects.',
  'capabilities.item5.title': 'Learning & adaptation',
  'capabilities.item5.desc': 'Improves from feedback and demonstration, not just pre-programmed routines.',

  'brain.tag': 'One system, one mind',
  'brain.heading': 'One mind, engineered from silicon to skin',
  'brain.description':
      'We build the full stack ourselves — sensing, perception, planning, and the actuators that carry it out — so every layer of the robot works from one shared model of the world.',
  'brain.image': brainImage,
  'brain.point1.title': 'Reads the room',
  'brain.point1.desc': 'Perceives people, obstacles, and intent in real time before acting.',
  'brain.point2.title': 'Real conversation',
  'brain.point2.desc': 'Understands and responds naturally, no rigid command syntax.',
  'brain.point3.title': 'Drives your time back',
  'brain.point3.desc': 'Takes on repetitive work so people can focus elsewhere.',

  'trust.tag': 'Companies & institutions',
  'trust.heading': 'Trusted where reliability is everything',
  'trust.feature1.title': 'Full-stack',
  'trust.feature1.desc': 'Hardware, software, and models designed together.',
  'trust.feature2.title': 'Safety-first',
  'trust.feature2.desc': 'Fail-safe braking and compliant joints by default.',
  'trust.feature3.title': 'Fleet learning',
  'trust.feature3.desc': "Every unit improves from the whole fleet's experience.",
  'trust.feature4.title': 'Open API',
  'trust.feature4.desc': 'Integrate with your own tools, sensors, and workflows.',
  'trust.quote1.quote':
      "We deployed a fleet across three shifts in a week. Uptime has been better than any AMR we've tried.",
  'trust.quote1.name': 'Ops Lead',
  'trust.quote1.company': 'Logistics operator',
  'trust.quote2.quote':
      "The conversational layer is genuinely useful — it feels like working with a colleague, not a machine.",
  'trust.quote2.name': 'Facilities Manager',
  'trust.quote2.company': 'Manufacturing plant',

  'footer.tagline': 'Intelligent humanoid robots designed to work alongside people.',
}
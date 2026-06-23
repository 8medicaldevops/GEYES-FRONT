import { SparklesIcon, PhoneIcon } from './ui/icons'

const STEPS = [
  {
    title: 'Recognize the warning signs',
    body: 'Look for: Chest pain or discomfort (pressure, squeezing, fullness). Pain spreading to arms, neck, jaw, or back. Shortness of breath. Cold sweat, nausea, or lightheadedness. If they collapse and are unresponsive, it may have progressed to cardiac arrest.',
  },
  {
    title: 'Call emergency services Immediately',
    body: 'Dial 112 (in Lagos) or Eight Medical 07071534107 and stay on the line. Prepare to give: Location (street, landmark). Patient’s age, symptoms, and if they’re conscious.',
  },
  {
    title: 'Keep the person calm & seated',
    body: 'Help them sit in a comfortable position (semi-reclined). Loosen tight clothing (tie, collar, belt). Encourage slow, steady breathing.',
  },
  {
    title: 'Give Aspirin (If Appropriate)',
    body: 'If not allergic and conscious: give them 300mg aspirin to chew slowly (helps thin blood).',
  },
  {
    title: 'Be ready for CPR',
    body: 'If the person becomes unresponsive and stops breathing normally: Start chest compressions immediately: Place hands in center of chest. Push hard & fast (100–120 compressions per minute). If available, use an AED (defibrillator).',
  },
  {
    title: 'Do NOT',
    body: '❌ Do not leave them alone unless to call for help. ❌ Do not give them food, drink, or other medications unless prescribed.',
  },
  {
    title: 'Stay With Them Until Help Arrives',
    body: 'Keep monitoring their breathing and pulse. Reassure them and report any changes to emergency responders.',
  },
]

export default function AteAiPanel() {
  return (
    <aside className="flex flex-col rounded-2xl bg-ink-50 p-6">
      {/* Badge */}
      <div className="flex w-fit items-center gap-2 rounded-full bg-violet-50 px-2 py-1.5">
        <SparklesIcon className="size-4 text-violet-700" />
        <span className="text-base font-semibold tracking-tightest text-violet-700">
          ATE AI
        </span>
      </div>

      {/* Intro */}
      <p className="mt-6 text-base font-light leading-relaxed tracking-tightest text-ink-700">
        I&apos;m sorry to hear that. A heart attack is a medical emergency, and
        you need to act fast. Call Emergency Services right away.
      </p>

      <div className="my-5 h-px w-full bg-ink-200" />

      {/* Emergency line */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-xl font-semibold tracking-tightest text-ink-900">
          <PhoneIcon className="size-5 text-pink-500" />
          Call Emergency Line
        </div>
        <p className="text-base font-medium tracking-tightest text-violet-700">
          112, 08098888763, 07071534107
        </p>
      </div>

      <div className="my-5 h-px w-full bg-ink-200" />

      {/* Steps */}
      <h3 className="text-lg font-semibold tracking-tightest text-ink-900">
        What you can do before help arrives
      </h3>

      <ol className="mt-6 flex flex-col gap-5">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-violet-700 text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold tracking-tightest text-ink-900">
                {step.title}
              </p>
              <p className="text-sm font-light leading-snug tracking-tightest text-ink-500">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  )
}

/* eslint-disable max-len, no-console */

/*!
 * Dependencies
 */

const slugify = require('slugify')

/*!
 * Primary question tree
 */

const questions = {
  questions: [
    {
      title: 'Less than 6 legs',
      key: 'fewer-legs',
      questions: [],
    },
    {
      title: '6 Legs',
      key: '6-legs',
      questions: [
        {
          title: 'Specimen has well-developed wings',
          key: 'has-wings',
          questions: [
            {
              title: 'Wings are membranous',
              key: 'membranous',
              questions: [
                {
                  title: '1 pair of wings',
                  key: 'one-pair',
                  questions: [
                    {
                      title: 'Body is grasshopper-like; enlarged hind legs',
                      key: 'grasshopper-like',
                      answer: 'Order Orthoptera',
                    },
                    {
                      title: 'Body is not grasshopper-like',
                      key: 'not-grasshopper',
                      questions: [
                        {
                          title: 'At least one antennae branches out to the side; front wings tiny; hind wings fanlike',
                          key: 'antannae-branches',
                          answer: 'Order Strepsiptera (rare)',
                        },
                        {
                          title: 'Not like this description',
                          key: 'no-branches',
                          questions: [
                            {
                              title: 'Abdomen has 1-3 caudal filaments; mouthparts vestigial',
                              key: 'abdomen-caudal',
                              questions: [
                                {
                                  title: 'Antennae long and conspicuous; abdomen terminating in long style; wings with single forked vein; halteres present, usually terminating in hooklike bristle; <5mm (male scale insect)',
                                  answer: 'Order Hemiptera (rare)',
                                },
                                {
                                  title: 'Antenna short/bristlelike; abdomen with 2-3 caudal filaments; wings with lots of veins and cells; no halteres; usually >5mm',
                                  answer: 'Order Ephemeroptera',
                                },
                              ],
                            },
                            {
                              title: 'Abdomen does not have thread or style-like caudal filaments; mouthparts nearly always well-developed, mandibulate or haustellate',
                              key: 'abdomen-mandibulate',
                              questions: [
                                {
                                  title: 'Tarsi nearly always 5-segmented; moutparts haustellate; hind wings reduced to halteres',
                                  answer: 'Order Diptera',
                                },
                                {
                                  title: 'Tarsi 2- or 3-segmented; mouthparts variable; hind wings reduced or absent (not haltere-like)',
                                  questions: [
                                    {
                                      title: 'Mouthparts mandibulate (some psocids)',
                                      answer: 'Order Psocoptera (rare)',
                                    },
                                    {
                                      title: 'Mouthparts haustellate',
                                      answer: 'Order Hemiptera (some planthoppers and a few leafhoppers)',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  title: '2 pairs of wings',
                  key: 'two-pair',
                  questions: [
                    {
                      title: 'Wings largely or entirely covered with scales; mouthparts usually in the form of a coiled proboscis; antennae many-segmented',
                      key: '',
                      answer: 'Order Lepidoptera (butterflies and moths)',
                    },
                    {
                      title: 'Wings don\'t have scales; mouthpart not a proboscis; variable antennae',
                      key: '',
                      questions: [
                        {
                          title: 'Wings long and narrow, veinless or with only 1 or 2 veins, fringed with long hairs; tarsi 1-or 2-segmented, last segment swollen; <5mm long',
                          key: '',
                          answer: 'Order Thysanoptera',
                        },
                        {
                          title: 'Wings not as described, or if they are somewhat linear, then tarsi have more than 2 segments',
                          key: '',
                          questions: [
                            {
                              title: 'Front wings relatively large, usually triangular; hind wings small, usually rounded; wings at rest held together above body; wings usually with many veins and cells; antennae short, bristlelike, insconspicuous; abdomen with 2 or 3 threadlike caudal filaments; delicate, soft-bodied',
                              key: '',
                              answer: 'Order Ephemeroptera',
                            },
                            {
                              title: 'Not exactly fitting above description',
                              key: '',
                              questions: [
                                {
                                  title: 'Tarsi 5-segmented',
                                  key: '',
                                  questions: [
                                    {
                                      title: 'Front wings noticeably hairly; mouthparts usually much reduced except for palps; antennae generally as long as body or longer; rather soft-bodied',
                                      key: '',
                                      answer: 'Order Trichoptera (caddisfly)',
                                    },
                                    {
                                      title: 'Front wings not hairy (at most microscopic hairs); mandibles well developed; antennae shorter than body',
                                      key: '',
                                      questions: [
                                        {
                                          title: 'Rather hard-bodied, wasplike insects, abdoment often constricted at base; hind wings smaller than front wings, with fewer veins; front wings with 20 or fewer cells',
                                          key: '',
                                          answer: 'Order Hymenoptera (sawflies, ants, wasps, bees, ichneumonids, chalcidoids)',
                                        },
                                        {
                                          title: 'Soft-bodied insects, not wasplike, abdomen not constricted at base; hind wings about the same size as front wings and usually with about as many veins; front wings often with more than 20 cells',
                                          key: '',
                                          questions: [
                                            {
                                              title: 'Costal area of front wing nearly always with numerous crossveins, or if not, then hind wings shorter than front wings; mouthparts not prolonged ventrally into beak',
                                              key: '',
                                              answer: 'Order Neuroptera (fishflies, dobsonflies, lacewings, and antlions)',
                                            },
                                            {
                                              title: 'Costal area of front wings with not more than 2 or 3 crossveins; mouthparts prolonged ventrally to form beaklike structure',
                                              key: '',
                                              answer: 'Order Mecoptera (scorpionflies)',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  title: 'Tarsi with 4 or fewer segments',
                                  key: '',
                                  questions: [
                                    {
                                      title: 'Hind wings as long as front wings and of same shape or wider at base; wings at restheld above the body or outstretched (never helf flat over abdomen); wongs with many veins and cells; antennae short, bristlelike, insconspicuous; abdomen long, slender; tarsi 3-segmented; length 20-85mm',
                                      key: '',
                                      answer: 'Order Odonota (dragonflies and damselflies)',
                                    },
                                    {
                                      title: 'Not exactly fitting the preceding description',
                                      key: '',
                                      questions: [
                                        {
                                          title: 'Moutparts haustellate',
                                          key: '',
                                          answer: 'Order Hemiptera',
                                        },
                                        {
                                          title: 'Mouthparts mandibulate',
                                          key: '',
                                          questions: [
                                            {
                                              title: 'Tarsi 4-segmented; front and hind wings similar in size, shape, venation; ceri minute or absent',
                                              key: '',
                                              answer: 'Order Isoptera (termites)',
                                            },
                                            {
                                              title: 'Tasi with 3 or fewer segments; hind wings usually shorter than front wings; cerci present or absent',
                                              key: '',
                                              questions: [
                                                {
                                                  title: 'Hind wings with anal area nearly always enlarged and forming a lobe, which is folded fanwise at rest; venationion varying from normal to very dense, thr front wings usually with several crossveins between Cu1 and M and between Cu1 and Cu2; cerci present, often fairly long; mostly >10mm in length; nymphs aquatic, adults usually found near water',
                                                  key: '',
                                                  answer: 'Order Plecoptera (stoneflies)',
                                                },
                                                {
                                                  title: 'Hind wings without enlarged anal area and not folded at rest, with no extra crossveins; cerci present (but short) or absent; mostly 10mm or less in length; nymphs not awuatic, adults not necessarily near water',
                                                  key: '',
                                                  questions: [
                                                    {
                                                      title: 'Tarsi 3-segmented, basal segment of front tarsi enlarged',
                                                      key: '',
                                                      answer: 'Order Embiidina (webspinners; rare)',
                                                    },
                                                    {
                                                      title: 'Tarsi 2- or 3-segmented, basal segment of front tarsi not enlarged',
                                                      key: '',
                                                      answer: 23, // TODO: ASK LIZ DAFUQ
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: 'Front wings hardened or leathery (or at least partly), hind wings usually membranous',
              key: 'hardened',
              questions: [],
            },
          ],
        },
        {
          title: 'No wings (or rudimentary wings)',
          key: 'no-wings',
          questions: [],
        },
      ],
    },
    {
      title: '8 Legs',
      key: '8-legs',
      questions: [
        {
          title: 'Abdomen Is Obviously Segmented',
          key: 'is-segmented',
          questions: [
            {
              title: 'Abdomen has stinger',
              key: 'has-stinger',
              answer: 'Order Scorpiones',
            },
            {
              title: "Abdomen doesn't have stinger, and specimen is <5mm",
              key: 'no-stinger',
              answer: 'Order Pseudoscorpiones',
            },
          ],
        },
        {
          title: 'Abdomen Is Not Segmented',
          key: 'not-segmented',
          questions: [
            {
              title: 'There is a petiole between abdomen and cephalothorax',
              key: 'petiole-cephalothorax',
              answer: 'Order Araneae (spiders)',
            },
            {
              title: 'There is no petiole',
              key: 'no-petiole',
              answer: 'Order Acari (mites and ticks)',
            },
          ],
        },
      ],
    },
    {
      title: 'More than 8 legs',
      key: 'many-legs',
      questions: [],
    },
  ],
}

/*!
 * Helpers
 */

const getKey = obj => {
  const { key, title, answer } = obj
  if (key) return key

  const part = (title || answer || '')
    .split(' ')
    .slice(0, 3)
    .join(' ')
    .toLowerCase()

  return slugify(part)
}

/*!
 * Validate
 */

const validate = obj => {
  const { questions } = obj
  const msg = JSON.stringify({ ...obj, questions: '...' })

  // Ensure we have all required data
  if (!obj.title) throw new Error('Missing `title`, obj=' + msg)
  if (!obj.answer && !questions) throw new Error('Missing `question` or `answer`, obj=' + msg)

  // Auto populate URL key if none provided
  if (!obj.key) {
    console.warn('Missing `key`, obj=' + msg)
    obj.key = getKey(obj)
  }

  if (questions && questions.length) questions.forEach(validate)
}
questions.questions.forEach(validate)

/*!
 * Exports
 */

module.exports = questions

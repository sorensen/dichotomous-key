/* eslint-disable max-len, no-console */
/* eslint-disable */

/*!
 * Dependencies
 */

const slugify = require('slugify')

/*!
 * Primary question tree
 */

const eightLegs = [
  {
    title: `8 legs`,
    key: `arachnida`,
    classAnswer: `Class Arachnida`,
    items: [
      {
        title: `Abdomen obviously segmented`,
        key: `segmented`,
        items: [
          {
            title: `Abdomen has stinger`,
            key: `stinger`,
            answer: `Order Scorpiones`,
            summary: `You may know them as scorpions. These arachnids are predatory, and use their venomous stinger and pinchers on their front legs to help them capture prey. Their stings can be painful, but most won’t actually hurt you.`
          },
          {
            title: `Abdomen doesn't have stinger, and specimen is <5mm`,
            key: `no-stinger`,
            answer: `Order Pseudoscorpiones`,
            summary: `Pseudoscorpions are tiny (almost always less than 5mm long) and are predators of insects. These arachnids do not have a stinger like the Scorpions, so they can’t sting you. Actually if you’ve found one, consider yourself lucky! They are keeping away destructive bugs like ants, carpet beetles, and mites.`
          },
        ],
      },
      {
        title: `Abdomen not segmented`,
        key: `not-segmented`,
        items: [
          {
            title: `There is a pedicel between abdomen and cephalothorax`,
            key: `pedicel`,
            answer: `Order Araneae (spiders)`,
            summary: `Spiders are everywhere! Although they have fangs that can inject venom, most are not aggressive. There are over 45,000 spider species, but only a few can actually hurt you. Male spiders are often smaller than the female spiders. Spiders are good neighbors to have because they eat bugs and other spiders that might try to live in your house!`
          },
          {
            title: `There is no pedicel`,
            key: `no-pedicel`,
            answer: `Order Acari (mites and ticks)`,
            summary: `Mites are usually very tiny, and, depending on the genus, may be plant eaters, predators of insects, parasites (of insects and humans). You may have heard of dust mites, which don’t feed on humans, but many people are allergic to them. Ticks tend to be larger than mites. They are all parasites and need blood to grow and reproduce. Many ticks feed on humans and other mammals, but some types of ticks feed birds, reptiles, or amphibians.`
          },
        ],
      },
    ],
  },
]

/*!
 *
 */

const sixLegs = [
  {
    title: `6 legs`,
    classAnswer: `Class Insecta`,
    key: `insecta`,
    items: [
      {
        title: `Specimen has well-developed wings`,
        key: `developed-wings`,
        items: [
          {
            title: `Wings membranous, not hardened or leathery`,
            key: `membranous`,
            items: [
              {
                title: `1 pair of wings`,
                key: `one-wing-pair`,
                items: [
                  {
                    title: `Body is grasshopper-like; pronotum extending back over abdomen and pointed apically; enlarged hind legs`,
                    key: `grasshopper-like`,
                    answer: `Order Orthoptera: specifically family Tetrigidae (pygmy grasshoppers)`,
                    summary: `Pygmy grasshoppers are small compared to other insects in the order Orthoptera. They are also usually colored to blend into their surroundings, so congratulations if you found one! Many Tetrigidae like to be close to the water, and some even live in it! However, there are many that like to be up in the trees too. Orthopterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`
                  },
                  {
                    title: `Body is not grasshopper-like; pronotum not as in preceding item; hind legs not so enlarged`,
                    key: `not-grasshopper`,
                    items: [
                      {
                        title: `Antennae with at least 1 segment bearing a long lateral process; front wings minute, hind wings fanlike; minute insects`,
                        key: `antannae`,
                        answer: `Order Strepsiptera: specifically adult male Twisted-Wing Insects`,
                        summary: `These guys are rare, so if you found one, pat yourself on the back! Male Strepsiptera look a lot like flies, but they can’t use their mouths to feed (the mouth is vestigial). The adult males don’t live for very long- just enough to find a female and mate. Strepsiptera are parasites of other insects. Strepsiptera are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages. Metamorphosis happens during the pupal stage.`
                      },
                      {
                        title: `Not exactly fitting the preceding description`,
                        key: `other`,
                        items: [
                          {
                            title: `Abdomen has 1-3 caudal filaments that are styletlike; mouthparts vestigial`,
                            key: `caudal`,
                            items: [
                              {
                                title: `Antennae long and conspicuous; abdomen terminating in long style (rarely 2 styles); wings with single forked vein; halteres present, usually terminating in hooklike bristle; <5mm`,
                                key: `long-antannae`,
                                answer: `Order Hemiptera: specifically adult male Scale Insects`,
                                summary: `If you’ve ever seen a scale insect, it was probably a female. The males don’t eat, and die quickly, living only long enough to mate. Since they die so fast, it is rare to find a male scale insect, so if you did, good work!`
                              },
                              {
                                title: `Antennae short, bristlelike, inconspicuous; abdomen with 2-3 threadlike caudal filaments; wings with lots of veins and cells; no halteres; usually >5mm`,
                                key: `short-antannae`,
                                answer: `Order Ephemeroptera (mayflies)`,
                                summary: `Young mayflies live in the water (streams mostly, but sometimes lakes), so you will usually find adult mayflies close to water. Ephemeropterans are hemimetabolous, which means the young ones (called nymphs, but technically naiads) look like the adults, but the adults have wings. Mayflies are special, though. They have one last stage as a juvenile, but it also has wings. It is called a subimago. When mayflies molt into their sexually mature adult forms, they do so in huge numbers. They also form swarms when they’re looking for mates. Fish and aquatic insects love to eat mayfly nymphs, so mayflies are considered an important part of the aquatic ecosystem. The nymphs also eat decaying things and algae in the water, so if you have a lot of mayflies, then you probably have a healthy stream!`
                              },
                            ],
                          },
                          {
                            title: `Abdomen does not have thread or stylet-like caudal filaments; mouthparts nearly always well-developed, mandibulate or haustellate`,
                            key: `not-caudal`,
                            items: [
                              {
                                title: `Tarsi nearly always 5-segmented; mouthparts haustellate; hind wings reduced to halteres`,
                                key: `five-segments`,
                                answer: `Order Diptera (flies)`,
                                summary: `Flies are everywhere! You are probably pretty familiar with many kinds, but maybe you just found one you thought was a wasp or a bee! Did you know that mosquitoes and midges are in the fly family? I hope you found out using the key! The halteres are one of the easiest ways to tell if you have a fly. Halteres are modified wings that give most Diptera the ability to be aerial acrobats (check out the glossary for more information on halteres). Dipterans are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages. Metamorphosis happens during the pupal stage.`
                              },
                              {
                                title: `Tarsi 2-segmented or 3-segmented; mouthparts variable; hind wings reduced or absent (not haltere-like)`,
                                key: `three-segments`,
                                items: [
                                  {
                                    title: `Mouthparts mandibulate (some psocids)`,
                                    key: `mandibulate`,
                                    answer: `Order Psocoptera (rare; some psocids)`,
                                    summary: `The insects in the Order Psocoptera are mostly scavengers. When they’re outside, they like to eat lichen and fungi, but if they get inside they might eat the paste in your book bindings or the glue that holds wallpaper to walls! This doesn’t happen very often though, compared to other types of insects that like to eat starch. Psocoptera mainly live outside. They are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`
                                  },
                                  {
                                    title: `Mouthparts haustellate`,
                                    key: `haustellate`,
                                    answer: `Order Hemiptera: specifically some Planthoppers and Leafhoppers)`,
                                    summary: `Planthoppers and leafhoppers can look a lot alike. They both suck sap from plants, and may pass diseases to those plants. In order to figure out which one you have, you’ll have to do some more research. Check out the Resources page to find out more! Hemipterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`
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
                title: `2 pairs of wings`,
                key: `two-wing-pair`,
                items: [
                  {
                    title: `Wings largely or entirely covered with scales; mouthparts usually in the form of a coiled proboscis; antennae many-segmented`,
                    key: `scales`,
                    answer: `Order Lepidoptera (butterflies and moths)`,
                    summary: `All of the insects in the order Lepidoptera have scales on their wings, which are actually just flattened hairs. If you touch the wings, some of those scales might come off on your hands- it doesn’t hurt them! Although butterflies and moths look a lot alike, there are some general differences to help you guess which one you have. Remember, these aren’t always true for every Lepidopteran! Butterflies usually fly during the day, but moths tend to fly at night. When butterflies rest, they like to hold their wings up over their bodies, while moths often hold them out to the sides. Butterflies are usually very colorful, and moths are not (they’re often shades of brown and grey). Moths have a thing called a frenulum, which is a hook that keeps the front and hind wings together when they fly. Butterflies don’t have a frenulum. Lepidopterans are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages. Metamorphosis happens during the pupal stage. Although you might not get to see it, a moth’s pupal case is called a cocoon, and has a cover of silk. A butterfly’s pupal case is called a chrysalis, which is hard and smooth.`,
                  },
                  {
                    title: `Wings don't have scales; mouthpart not a proboscis; variable antennae`,
                    key: `no-scales`,
                    items: [
                      {
                        title: `Wings long and narrow, veinless or with only 1 or 2 veins, fringed with long hairs; tarsi 1-or 2-segmented, last segment swollen; <5mm long`,
                        key: `wings-long`,
                        answer: `Order Thysanoptera (thrips)`,
                        summary: `Thrips have “hairy” wings, which are not very good for flying. Thrips are tiny insects, and mostly feed on plants by sucking up the sap. Thrips are considered pests because they can give diseases to the plants they feed on. However, some thrips are pollinators, and others are actually predators of other insects. Thysanoptera are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                      },
                      {
                        title: `Wings not as described, or if they are somewhat linear, then tarsi have more than 2 segments`,
                        key: `wings-other`,
                        items: [
                          {
                            title: `Front wings relatively large, usually triangular; hind wings small, usually rounded; wings at rest held together above body; wings usually with many veins and cells; antennae short, bristlelike, inconspicuous; abdomen with 2 or 3 threadlike caudal filaments; delicate, soft-bodied`,
                            key: `wings-large`,
                            answer: `Order Ephemeroptera (mayflies)`,
                            summary: `Young mayflies live in the water (streams mostly, but sometimes lakes), so you will usually find adult mayflies close to water. Ephemeropterans are hemimetabolous, which means the young ones (called nymphs, but technically naiads) look like the adults, but the adults have wings. Mayflies are special, though. They have one last stage as a juvenile, but it also has wings. It is called a subimago. When mayflies molt into their sexually mature adult forms, they do so in huge numbers. They also form swarms when they’re looking for mates. Fish and aquatic insects love to eat mayfly nymphs, so mayflies are considered an important part of the aquatic ecosystem. The nymphs also eat decaying things and algae in the water, so if you have a lot of mayflies, then you probably have a healthy stream!`,
                          },
                          {
                            title: `Not exactly fitting the preceding description`,
                            key: `other`,
                            items: [
                              {
                                title: `Tarsi 5-segmented`,
                                key: `five-segments`,
                                items: [
                                  {
                                    title: `Front wings noticeably hairy; mouthparts usually much reduced except for palps; antennae generally as long as body or longer; rather soft-bodied`,
                                    key: `hairy`,
                                    answer: `Order Trichoptera (caddisfly)`,
                                    summary: `Caddisflies have very interesting larvae (babies). They all live in freshwater, and some make a protective case for themselves. They spin it from silk and then attach small bits of their substrate to it, such as twigs, pieces of gravel, and pieces of plants or anything else they can find. Some larvae are herbivorous, while others are predators. The adults don’t usually eat anything, and only live long enough to mate. The caddisfly adults can easily be mistaken for moths. If you have lots of caddisflies, you probably have healthy bodies of water! Trichopterans are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages.`,
                                  },
                                  {
                                    title: `Front wings not hairy (at most microscopic hairs); mandibles well developed; antennae shorter than body`,
                                    key: `not-hairy`,
                                    items: [
                                      {
                                        title: `Rather hard-bodied, wasplike insects, abdomen often constricted at base; hind wings smaller than front wings, with fewer veins; front wings with 20 or fewer cells`,
                                        key: `hard-bodied`,
                                        answer: `Order Hymenoptera (sawflies, ants, wasps, bees, ichneumonids, chalcidoids)`,
                                        summary: `The order Hymenoptera is HUGE! There are over 150,000 species in this order. Did you know that ants are related to bumble bees? There are so many different genera, in fact, that it would be impossible to tell you about them all here. So check out the Resources page for more information! Hymenoptera are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages.`,
                                      },
                                      {
                                        title: `Soft-bodied insects, not wasplike, abdomen not constricted at base; hind wings about the same size as front wings and usually with about as many veins; front wings often with more than 20 cells`,
                                        key: `soft-bodied`,
                                        items: [
                                          {
                                            title: `Costal area of front wing nearly always with numerous crossveins, or if not, then hind wings shorter than front wings; mouthparts not prolonged ventrally into beak`,
                                            key: `many-crossveins`,
                                            answer: `Order Neuroptera (fishflies, dobsonflies, lacewings, and antlions)`,
                                            summary: `You may have noticed that your Neuropteran has big eyes! These are their compound eyes, and make them great at finding food. Most of the larvae (babies) of this order are predators. The ones that are like to camouflage themselves in debris, or, in the case of antlions, dig pits! On the other hand, only some of the adult neuropterans are predators. Some don’t eat at all, and others drink nectar. Because they can be predatory, insects in the group Neuroptera are our friends! Neuropterans are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages.`,
                                          },
                                          {
                                            title: `Costal area of front wings with not more than 2 or 3 crossveins; mouthparts prolonged ventrally to form beaklike structure`,
                                            key: `few-crossveins`,
                                            answer: `Order Mecoptera (scorpionflies)`,
                                            summary: `Some scorpionflies look like they have a stinger, but it’s actually the male genitals! The abdomens of female scorpionflies just taper at the end. The big beaks of scorpionflies are usually used for scavenging; they eat dying plants and dead insects. Mecopterans usually like to live in moist areas with lots of decaying leaf litter, like forests. Eggs need a lot of moisture to hatch, and when they do, the larvae look like caterpillars. Mecopterans are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages.`,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                title: `Tarsi with 4 or fewer segments`,
                                key: `fewer-segments`,
                                items: [
                                  {
                                    title: `Hind wings as long as front wings and of same shape or wider at base; wings at rest held above the body or outstretched (never held flat over abdomen); wings with many veins and cells; antennae short, bristlelike, inconspicuous; abdomen long, slender; tarsi 3-segmented; length 20-85mm`,
                                    key: `even-wings`,
                                    answer: `Order Odonota (dragonflies and damselflies)`,
                                    summary: `Dragonflies and damselflies look a lot alike. They both have very large compound eyes, which help them to be great hunters, able to capture prey in flight. This is good, because Odonata are predators as juveniles and adults! However, they are different in a lot of ways too, so it shouldn’t be too hard to tell which one you have. Damselflies look a lot more delicate than dragonflies. The big eyes of the dragonfly basically touch at the back of the face, but there is a gap between them on damselflies. Damselflies hold their wings back at rest, while dragonflies hold them out to the sides. Congratulations if you caught one- they’re good fliers! Odonatans are hemimetabolous, which means the young ones (called nymphs, but technically naiads) look like the adults, but the adults have wings.`,
                                  },
                                  {
                                    title: `Not exactly fitting the preceding description`,
                                    key: `other`,
                                    items: [
                                      {
                                        title: `Mouthparts haustellate`,
                                        key: `haustellate`,
                                        answer: `Order Hemiptera`,
                                        summary: `Did you know that all bugs are insects, but not all insects are bugs? That’s because the order Hemiptera contains the “true” bugs! But don’t be fooled: just because an insect has “bug” in its name, doesn’t mean it’s a hemipteran. Ladybugs, for example, are beetles. All hemipterans have “piercing-sucking” mouthparts. Mostly they use these mouthparts on plants, but there are some predators, and even some blood-feeders (bedbugs and kissing bugs). Many insects in this order are considered pests of plants. Hemipterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. There are at least 50,000 species in this order, so you may have to do more research to find out which bug you have. Check the Resources page next!`,
                                      },
                                      {
                                        title: `Mouthparts mandibulate`,
                                        key: `mandibulate`,
                                        items: [
                                          {
                                            title: `Tarsi 4-segmented; front and hind wings similar in size, shape, venation; cerci minute or absent`,
                                            key: `four-segments`,
                                            answer: `Order Isoptera (termites)`,
                                            summary: `You can easily tell the difference between a termite and an ant, because termites don’t have a constricted waist (see Hymenoptera). Termites are “eusocial” insects, and live in large colonies. The term eusocial means that the castes (workers, soldiers, kings, and queens) all look different, even if they’re the same species. It also means that they take care of their young, and defend their colonies (among other things!). Termites eat cellulose, so that means that they often eat wood, but it can also be other types of plant material. Termites are actually very important for ecosystems, even though they are considered pests when they’re in our houses. Some termites make nests, and some live underground in mounds. But they’ll always be found in warm areas, because they are considered “soft” bodied, which means they freeze easily. Isoptera are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. Development is complicated in this order, though, due to the different castes.`,
                                          },
                                          {
                                            title: `Tarsi 3-segmented or fewer; hind wings usually shorter than front wings; cerci present or absent`,
                                            key: `few-segments`,
                                            items: [
                                              {
                                                title: `Hind wings with anal area nearly always enlarged and forming a lobe, which is folded fanwise at rest; venation varying from normal to very dense, the front wings usually with several crossveins between Cu1 and M and between Cu1 and Cu2; cerci present, often fairly long; mostly >10mm in length; nymphs aquatic, adults usually found near water`,
                                                key: `long-cerci`,
                                                answer: `Order Plecoptera (stoneflies)`,
                                                summary: `The nymphs of stoneflies are aquatic, so the adults are usually found near the water. Despite their many-veined wings, they are not very good fliers. Adults may not be able to eat, but the ones that do only eat plants. The adults only live for a few weeks, but the nymphs can live for up to 4 years! Stonefly nymphs need water with a lot of oxygen in it, so if you found one, congratulations! You have a very healthy body of water near you! Plecopterans are hemimetabolous, which means the young ones (called nymphs, but technically naiads) look like the adults, but the adults have wings.`,
                                              },
                                              {
                                                title: `Hind wings without enlarged anal area and not folded at rest, with no extra crossveins; cerci present (but short) or absent; mostly 10mm or less in length; nymphs not aquatic, adults not necessarily near water`,
                                                key: `short-cerci`,
                                                items: [
                                                  {
                                                    title: `Tarsi 3-segmented, basal segment of front tarsi enlarged`,
                                                    key: `three-segments`,
                                                    answer: `Order Embiidina (webspinners; rare)`,
                                                    summary: `Webspinners use the silk they spin to make “galleries” that they live in. In their galleries they are protected from predators among other things. A gallery usually has more than just one webspinner in it. The females lay their eggs in the gallery, and take care of them for a little while after they hatch. Webspinners eat plants, except for the adult males, which don’t eat at all. The males die quickly, so they leave the gallery as soon as they can to find a mate. If you’ve found a webspinner, good job! They are pretty rare. Webspinners are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                                                  },
                                                  {
                                                    title: `Tarsi 2-segmented or 3-segmented, basal segment of front tarsi not enlarged`,
                                                    key: `two-segments`,
                                                    items: [
                                                      {
                                                        title: `Cerci present; tarsi 2-segmented; wing venation reduced; antennae moniliform and 9-segmented`,
                                                        key: `cerci`,
                                                        answer: `Order Zoraptera (rare)`,
                                                        summary: `These little guys are very rare, so if you found one, congratulations! There are only 44 species that we know of, in one genus: Zorotypus. Zorapterans live in colonies in or under rotting wood, and mainly eat fungal spores and dead plant material. Sometimes they are hunters of other tiny insects and mites.`,
                                                      },
                                                      {
                                                        title: `Cerci absent; tarsi 2-segmented or 3- segmented; wing venation not particularly reduced; antennae not moniliform, usually long and hairlike, with 13 or more segments`,
                                                        key: `no-cerci`,
                                                        answer: `Order Psocoptera (psocids)`,
                                                        summary: `The insects in the Order Psocoptera are mostly scavengers. When they’re outside, they like to eat lichen and fungi, but if they get inside they might eat the paste in your book bindings or the glue that holds wallpaper to walls! This doesn’t happen very often though, compared to other types of insects that like to eat starch. Psocoptera mainly live outside. Psocopterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                                                      },
                                                    ]
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
            title: `Front wings hardened or leathery at least at base, hind wings, if present, usually membranous`,
            key: `hard-wings`,
            items: [
              {
                title: `Mouthparts haustellate, beak elongate and usually segmented`,
                key: `haustellate`,
                answer: `Order Hemiptera`,
                summary: `Did you know that all bugs are insects, but not all insects are bugs? That’s because the order Hemiptera contains the “true” bugs! But don’t be fooled: just because an insect has “bug” in its name, doesn’t mean it’s a hemipteran. Ladybugs, for example, are beetles. All hemipterans have “piercing-sucking” mouthparts. Mostly they use these mouthparts on plants, but there are some predators, and even some blood-feeders (bedbugs and kissing bugs). Many insects in this order are considered pests of plants. Hemipterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. There are at least 50,000 species in this order, so you may have to do more research to find out which bug you have. Check the Resources page next!`,
              },
              {
                title: `Mouthparts mandibulate`,
                key: `mandibulate`,
                items: [
                  {
                    title: `Abdomen with forcepslike cerci; front wings short, leaving most of abdomen exposed; tarsi 3-segmented`,
                    key: `forcepslike`,
                    answer: `Order Dermaptera (earwigs)`,
                    summary: `Most earwigs have the easily recognizable forceps-like pincers called cerci. The pincers of males tend to be more curved, but both males and females can use their pincers for tasks such as grabbing things and defense. Earwigs have membranous hindwings that are thin, and have to be folded to fit under their forewings, which are short and leathery. The earwigs use their pincers to help fold up the wings! Most earwigs can fly with their hindwings, but it doesn’t happen very often (at least when a human is watching!). Earwigs are mostly omnivorous scavengers, but some are predators. They move around mostly at night, and are considered pests by most people because they include garden plants in their diets. Earwigs are good at hiding under things since they are flattened, so during the day they squeeze into tight spaces. Dermapterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. Earwigs are just as likely to crawl in your ear as any other insect (which is highly unlikely), so don’t worry!`,
                  },
                  {
                    title: `Abdomen without forcepslike cerci, or if so, then front wings cover most of abdomen; tarsi variable`,
                    key: `not-forcepslike`,
                    items: [
                      {
                        title: `Front wings without veins, usually meeting in straight line down middle of back; antennae generally with 11 or fewer segments; hind wings narrow, usually longer than front wings when unfolded, with few veins`,
                        key: `wing-veins`,
                        answer: `Order Coleoptera (beetles)`,
                        summary: `The order Coleoptera is the largest of all the insect orders! There are so many different types of beetles that it is impossible to describe them here. They range from living in water to on land, from eating dung to rotting flesh to being serious plant pests. They can be all colors of the rainbow and live in almost all the places in the world. They can be tiny to gigantic, and they have a wide range of mandible types including horns and pincers. Coleopterans are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages. I highly recommend that you research your beetle to find out exactly what it is! Check the Resources page to start!`,
                      },
                      {
                        title: `Front wings with veins, either held rooflike over abdomen or overlapping over abdomen when at rest; antennae generally with more than 12 segments; hind wings broad, usually shorter than front wings, with many veins, usually folded fanwise at rest`,
                        key: `no-veins`,
                        items: [
                          {
                            title: `Tarsi with 4 or fewer segments; usually jumping insects, with hind femora more or less enlarged`,
                            key: `few-segments`,
                            answer: `Order Orthoptera (grasshoppers and crickets)`,
                            summary: `All insects in the order Orthoptera use song to attract mates. Usually it’s only the males that “sing,” but in the Katydid (or bush cricket) family, females sing too. Although you may think of the jumping insects when you think of crickets, mole crickets are also orthopterans. Mole crickets have front legs that are adapted for digging, and live underground. When they sing, they do it from a burrow that opens out like a horn, so it’s very loud! Orthopterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. If you caught a grasshopper or cricket, congratulations! They’re good jumpers and can be hard to sneak up on!`,
                          },
                          {
                            title: `Tarsi 5-segmented; running or walking insects, with hind femora not particularly enlarged`,
                            key: `five-segments`,
                            items: [
                              {
                                title: `Prothorax much longer than mesothorax; front legs modified for grasping prey`,
                                key: `long-prothorax`,
                                answer: `Order Mantodea (mantids)`,
                                summary: `You may know mantids by the name “Praying Mantis.” They’re called this because of their front legs, which are modified for grabbing prey and called “raptorial.” Mantids are predators, and are very good at it. Mantids have large compound eyes, and their necks can rotate almost 180 degrees. When hunting, most stand very still and may even camouflage themselves. When their prey walks by they attack very quickly! Some mantids will stalk their prey. Mantids eat other insects and arthropods, but the bigger mantids may go after birds and lizards. A lot of species of mantids have built-in camouflage, called “cryptic coloring.” Others actually mimic the look of flowers. A mantid’s wings are usually brightly colored, so if a mantid is threatened, it will hold up its arms and spread its wings to try to scare away whatever is threatening it. Mantids can use their wings to fly too! Mantids are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                              },
                              {
                                title: `Prothorax not greatly lengthened; front legs not modified for grasping prey`,
                                key: `short-prothorax`,
                                answer: `Order Blattodea (cockroaches)`,
                                summary: `If you found a cockroach in your house, chances are you were grossed out! But don’t let their bad reputation keep you from learning and appreciating this order. The cockroaches that may live in our houses only represent a fraction of all of the Blattodea species. Most cockroaches are pretty small, but in Central and South America they may get big living in the tropics. The forewings of cockroaches are called tegmina, and are leathery, but not necessarily hard. Cockroaches eat just about anything with their chewing mouthparts. Many cockroaches live on land, but some are aquatic. Regardless of wet or dry, cockroaches live on every continent (even Antarctica!). Cockroaches are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
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
        title: `Wingless or with wings vestigial or rudimentary (nymphs, larvae, and some adults)`,
        key: `wingless`,
        items: [
          {
            title: `Body usually insectlike, with segmented thoracic legs and usually also antennae (adults, nymphs, and some larvae)`,
            key: `insectlike`,
            items: [
              {
                title: `Front wings present but rudimentary; hind wings absent or represented by halteres; tarsi nearly always 5-segmented`,
                key: `wings`,
                answer: `Order Diptera (rare types)`,
                summary: `These flies are true flies, but lack wings. If you found one, save it! They are very rare.`,
              },
              {
                title: `Wings entirely absent, or with 4 rudimentary wings and no halteres; tarsi variable`,
                key: `no-wings`,
                items: [
                  {
                    title: `Antennae absent; length 1.5mm or less; usually occurring in soil or leaf litter`,
                    key: `no-antennae`,
                    answer: `Order Protura (rare)`,
                    summary: `Insects of this order are very rare, mostly because they are so small that they’re hardly ever seen! They live in moist places, and probably eat decaying plant matter and tiny dead arthropods. Not much is known about Proturans. They don’t have eyes or antennae, so their feet are what they use to sense their environment. They are sometimes called coneheads because of the shape of their heads. Congratulations if you found one!`,
                  },
                  {
                    title: `Antennae usually present (sometimes small); size and habitat variable`,
                    key: `antennae`,
                    items: [
                      {
                        title: `Ectoparasites of birds, mammals, or honey bees and usually found on host; body more or less leathery, usually flattened dorsoventrally or laterally`,
                        key: `ectoparasites`,
                        items: [
                          {
                            title: `Tarsi 5-segmented; antennae short, usually concealed in grooves on head; mouthparts haustellate`,
                            key: `five-segments`,
                            items: [
                              {
                                title: `Body flattened laterally; usually jumping insects, with relatively long legs`,
                                key: `long-legs`,
                                answer: `Order Siphonaptera (fleas)`,
                                summary: `Fleas are great jumpers. Their long legs are capable of propelling them up to 7 inches in the air, or 13 inches along the ground. And they are tiny, so that’s a big jump! Fleas are flattened “laterally” so if you look at them from the top, they’re very skinny. This makes it easy for them to move through hair and feathers. Fleas are parasites of mammals and other warm-blooded creatures such as birds. Most fleas have a very specific host, but some aren’t very choosy. Fleas are capable of giving diseases to the things they bite, and some people are very allergic to them. So if you see a flea, try not to touch it, and let someone know. Fleas are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages.`,
                              },
                              {
                                title: `Body flattened dorsoventrally; not jumping insects, legs usually short`,
                                key: `short-legs`,
                                answer: `Order Diptera (rare types; Hippoboscidae)`,
                                summary: `These flies are parasites of mammals and other warm-blooded animals like birds. They are not very good fliers, and are nicknamed louse flies. They are rare, but watch out. They are capable of giving diseases to the animals they bite. Congratulations if you found this rare insect, but let someone know! Diptera are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages.`,
                              },
                            ],
                          },
                          {
                            title: `Tarsi with fewer than 5 segments; antennae, mouthparts variable`,
                            key: `few-segments`,
                            items: [
                              {
                                title: `Antennae distinctly longer than head; tarsi 3-segmented`,
                                key: `long-antennae`,
                                answer: `Order Hemiptera (bed bugs and bat bugs)`,
                                summary: `Bed bugs are not great to have around because they feed on human blood using their piercing-sucking mouthparts. Luckily, we’re pretty sure that bed bugs don’t give diseases to humans, but many people are allergic to them. Bat bugs look a lot like bed bugs, but mostly eat the blood of bats. They will bite humans if they get the chance, though. If you’ve found one of these little guys, let someone know! You definitely don’t want them in your house. Bed and bat bugs are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                              },
                              {
                                title: `Antennae not longer than head; tarsi 1-segmented`,
                                key: `short-antennae`,
                                answer: `Order Phthiraptera (lice)`,
                                summary: `Lice are amazing creatures despite being parasites of birds and mammals. This is because their bodies are perfectly specialized for the animal they feed on. Some lice chew on things like dead skin or other body debris, while others will pierce the skin and suck blood and other fluids. While lice are able to give diseases to their hosts, they are not a sign of a dirty person or structure. Lice are good at hanging on tight to whatever structure they’re adapted for (feathers or hairs), so you can be as clean as you want, and still have them. So don’t worry, but let someone know if you found one! Lice are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        title: `Free-living (not ectoparasites), terrestrial or aquatic`,
                        key: `free-living`,
                        items: [
                          {
                            title: `Mouthparts haustellate, with conical or elongate beak enclosing stylets`,
                            key: `haustellate`,
                            items: [
                              {
                                title: `Tarsi 5-segmented; maxillary or labial palps present`,
                                key: `five-segments`,
                                items: [
                                  {
                                    title: `Body covered with scales; beak usually in form of coiled tube; antennae long and many-segmented`,
                                    key: `scales`,
                                    answer: `Order Lepidoptera (wingless moths)`,
                                    summary: `Wingless moths are not all wingless- just the females are. So, if you found a wingless moth, it may not be too hard to figure out its genus and species. Check the Resources page for your next step! Moths are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages.`,
                                  },
                                  {
                                    title: `Body not covered with scales; beak not coiled; antennae variable but often short, with 3 or fewer segments`,
                                    key: `no-scales`,
                                    answer: `Diptera (rare; wingless flies; aptilotus?)`,
                                    summary: `These wingless flies are very rare, and probably eat dung. They’re usually pretty small, and are helpful parts of the environment because they recycle fecal waste! Dipterans are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages. Congratulations if you found one!`,
                                  },
                                ],
                              },
                              {
                                title: `Tarsi with 4 or fewer segments; palps small or absent`,
                                key: `few-segments`,
                                items: [
                                  {
                                    title: `Mouthparts in form of cone located basally on ventral side of head; palps present but short; body elongate, usually less than 5mm in length; antennae about as long as head and prothorax combined, not bristlelike, 4- to 9-segmented; tarsi 1- or 2-segmented, often without claws`,
                                    key: `cone-mouth`,
                                    answer: `Order Thysanoptera (thrips)`,
                                    summary: `Thrips have “hairy” wings, which are not very good for flying. Thrips are tiny insects, and mostly feed on plants by sucking up the sap. Thrips are considered pests because they can give diseases to the plants they feed on. However, some thrips are pollinators, and others are actually predators of other insects. Thysanoptera are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                                  },
                                  {
                                    title: `Mouthparts in form of an elongate segmented beak; palps absent; other characters variable`,
                                    key: `long-mouth`,
                                    answer: `Order Hemiptera (aphids)`,
                                    summary: `Aphids eat plant sap using their piercing-sucking mouthparts. They are capable of passing diseases to plants, so humans consider them pests. Plants do okay with some aphids on them, but if there’s too many, it can hurt the plant. Aphids get eaten by lots of other insects, but may be “farmed” by ants because they secrete something called “honeydew,” which is as sweet as it sounds to ants. Aphids are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. If you want to keep your aphids for a collection, store them in alcohol. If they dry up, they won’t look like aphids anymore! Check the Equipment page for more information on collecting insects.`,
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            title: `Mouthparts mandibulate (sometimes concealed in head), not beaklike`,
                            key: `mandibulate`,
                            items: [
                              {
                                title: `Abdomen distinctly constricted at base; antennae often elbowed; tarsi 5-segmented; hard-bodied, antlike insects`,
                                key: `abdomen-constricted`,
                                answer: `Order Hymenoptera (ants and wingless wasps)`,
                                summary: `There are a lot of different kinds of ants, but some are pretty easy to identify to family or even genus and species if you have something to magnify them. Only some ants are considered pests to humans, and that’s usually because they like to get in our houses and eat our food. Some species of ants may have small colonies, but other species live in huge colonies, with millions of ants in them. Ants are usually “eusocial,” which means that the castes (workers, soldiers, drones, and queens) all look different, even if they’re the same species. It also means that they take care of their young, and defend their colonies (among other things!). Did you know there were wingless wasps? They are easy to mistake for ants, so look closely at the antennae. Wasps don’t have elbowed antennae, but they still sting, so look out! Most wingless wasps are not aggressive, though, and will only sting if they are being crushed. Hymenoptera are holometabolous, which means the larvae don’t look anything like the adults, and there is a pupal stage between the larval and adult stages.`,
                              },
                              {
                                title: `Abdomen not particularly constricted at base; antennae not elbowed; tarsi variable`,
                                key: `abdomen`,
                                items: [
                                  {
                                    title: `Abdomen with 3 caudal filaments that are long and threadlike, and with stylelike appendages on some abdominal segments; mouthparts mandibulate, but often more or less retracted into head; body nearly always covered with scales; terrestrial`,
                                    key: `three-caudal`,
                                    items: [
                                      {
                                        title: `Compound eyes large, usually contiguous; body somewhat cylindrical, with thorax arched; ocelli present; middle and hind coxae nearly always with styli; abdominal styli on segments 2-9`,
                                        key: `large-eyes`,
                                        answer: `Order Microcoryphia (Bristletails)`,
                                        summary: `Bristletails live in a lot of different places. They tend to like moist places best, but can be found in deserts sometimes too. They eat algae and other organic matter. Bristletails can jump high for their size: up to 12 inches! They’re hard to catch, so if you got one, good job! Bristletails are ametabolous, which means they just eventually molt into the adult stage, and the adults molt too.`,
                                      },
                                      {
                                        title: `Compound eyes small and widely separated, or absent; body somewhat flattened dorsoventrally, thorax not arched; ocelli present or absent; middle and hind coxae without styli; abdominal segments 1-6 usually without styli`,
                                        key: `small-eyes`,
                                        answer: `Order Thysanura (silverfish, firebrats)`,
                                        summary: `Silverfish and firebrats look a lot alike. However, silverfish are usually a solid light grey, while firebrats tend to have mottled colors. Both of these insects like warm and moist places, and eat starchy and protein-rich foods. For these reasons, humans consider them pests when they are in our homes. Thysanurans are ametabolous, which means they just eventually molt into the adult stage, and the adults molt too.`,
                                      },
                                    ],
                                  },
                                  {
                                    title: `Abdomen with only 2 threadlike caudal filaments or none; if with 3 (mayfly nymphs), then aquatic; other characters variable `,
                                    key: `two-caudal`,
                                    items: [
                                      {
                                        title: `Aquatic, often with tracheal gills`,
                                        key: `aquatic`,
                                        items: [
                                          {
                                            title: `Nymphs; compound eyes and usually wing pads present`,
                                            key: `nymphs`,
                                            items: [
                                              {
                                                title: `Labium prehensile, folded under head at rest, and when extended much longer than head`,
                                                key: `labium-prehensile`,
                                                answer: `Order Odonata (dragonfly and damselfly nymphs)`,
                                                summary: `The nymphs (technically naiads) of the order Odonata are fierce predators. They live in water, but breathe oxygen, so they have gills. They eat aquatic arthropods and may even eat small fish! Once they go through their nymphal stages, their last molt is the adult form, which is a great flier and also a predator.`,
                                              },
                                              {
                                                title: `Labium normal, not as in preceding entry`,
                                                key: `labium-normal`,
                                                items: [
                                                  {
                                                    title: `With 3 caudal filaments; tarsi with 1 claw; gills located on lateral margins of abdominal terga, usually leaflike or platelike`,
                                                    key: `three-caudal`,
                                                    answer: `Order Ephemeroptera (mayfly nymphs)`,
                                                    summary: `Nymphs of this order (technically naiads) use gills to breathe when the water they live in doesn’t have a lot of oxygen, but if there is enough oxygen, they may absorb it through their skin. Mayfly nymphs molt many times before becoming subimagos (winged juveniles) and then adults. They can live for over a year in nymphal stages. The nymphs of most species are herbivores, eating algae and other plants in the water, but some species are predators of small aquatic arthropods and their larvae.`,
                                                  },
                                                  {
                                                    title: `With 2 caudal filaments; tarsi with 2 claws, gills (rarely absent) more or less fingerlike, usually located on underside of thorax`,
                                                    key: `two-caudal`,
                                                    answer: `Order Plecoptera (stonefly nymphs)`,
                                                    summary: `Nymphs of this order (technically naiads) use gills to breathe when the water they live in doesn’t have a lot of oxygen, but if there is enough oxygen, they may absorb it through their skin. Stonefly nymphs need very clean water to live. Stoneflies can live as nymphs for over a year before molting to the adult stage. The nymphs of most species eat plants matter, but some are carnivorous and will eat small aquatic arthropods.`,
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            title: `Larvae; compound eyes and wing pads absent`,
                                            key: `larvae`,
                                            items: [
                                              {
                                                title: `With 5 pairs of prolegs on ventral side of abdominal segments, the prolegs with tiny hooks (crochets)`,
                                                key: `five-leg-pairs`,
                                                answer: `Order Lepidoptera (rare; aquatic caterpillars)`,
                                                summary: `Wow, if you found one of these, you are lucky! They are the rare aquatic caterpillars of a terrestrial moth. Like many other caterpillars, these ones are herbivores, but unlike most other caterpillars, since they live in the water they have gills to help them breathe.`,
                                              },
                                              {
                                                title: `Abdominal segments without prolegs or with terminal pair only`,
                                                key: `abdominal-segments`,
                                                items: [
                                                  {
                                                    title: `Mouthparts consisting of 2 slender and elongate structures, longer than head; antennae long and slender, at least one third as long as body; tarsi with 1 claw; living in freshwater sponges`,
                                                    key: `long-mouth`,
                                                    answer: `Order Neuroptera (larvae of Sisyridae)`,
                                                    summary: `These aquatic larvae are very specialized. They parasitize freshwater sponges by piercing them with their long mouthparts and sucking out the contents of their cells. They also use their antennae to help them move around, and they have gills for breathing. When they are ready to pupate, the larvae leave the water and make a cocoon.`,
                                                  },
                                                  {
                                                    title: `Mouthparts, usually also antennae, short, not as in preceding entry`,
                                                    key: `short-mouth`,
                                                    items: [
                                                      {
                                                        title: `Tarsi with 2 claws; abdomen with long slender lateral processes and a long slender terminal process or with slender lateral processes and a pair of hooklike structures apically`,
                                                        key: `two-claws`,
                                                        answer: `Order Neuroptera (fishfly and alderfly larvae)`,
                                                        summary: `Fishfly larvae may be predators or omnivores. They have very strong mandibles, which they can use to pinch you, so be careful when you handle them! Fishflies use gills to breathe underwater, but may also absorb oxygen through their skin. Fishflies pupate on land. Alderfly larvae can also pinch you with their strong mandibles, so look out! These larvae are predators, and also use gills to breathe, like the fishfly larvae.`,
                                                      },
                                                      {
                                                        title: `Tarsi with 1 or 2 claws; if with 2, then abdomen not as in preceding entry`,
                                                        key: `few-claws`,
                                                        items: [
                                                          {
                                                            title: `Abdomen with pair of hooks, usually on anal prolegs, at posterior end and without long lateral processes (but sometimes with fingerlike gills); tarsi with 1 claw; usually living in cases`,
                                                            key: `hook-pair`,
                                                            answer: `Order Trichoptera (caddisfly larvae)`,
                                                            summary: `Most species of caddisfly larvae make themselves cases to live in. They spin silk, and weave parts of their environment (the bottom of bodies of water) into it. It is strong, and keeps them safe. Some species of larvae also use their silk to make nets that they use to collect food from the water, which they then eat. Others walk around and collect their food. Different species eat different things depending on the water they live in. They can be herbivores or predators. To pupate, the caddisflies that build cases just close off the top of the case while underwater. When the adult emerges it swims to the surface and spends the rest of its (short) life on land and in the air.`,
                                                          },
                                                          {
                                                            title: `Abdomen with 4 hooks at posterior end or none, with or without long lateral processes; tarsi with 1 or 2 claws; not living in cases`,
                                                            key: `four-hooks`,
                                                            answer: `Order Coleoptera (aquatic beetle larvae)`,
                                                            summary: `The aquatic coleopteran larvae are just as diverse as the terrestrial ones. There aren’t many defining features, so it might be easier to know if you don’t have the larvae of an aquatic beetle. However, if you want to be sure, check out the Resources page to keep searching!`,
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
                                        title: `Terrestrial, without tracheal gills`,
                                        key: `terrestrial`,
                                        items: [
                                          {
                                            title: `Mouthparts usually withdrawn into head and not apparent; abdomen with stylelike appendages on some segments or with forked appendage near end of abdomen; usually less than 7mm in length`,
                                            key: `mouth-withdrawn`,
                                            items: [
                                              {
                                                title: `Antennae long, many-segmented; abdomen with at least 9 segments, with stylelike appendages on ventral side of some segments; without forked appendage near end of abdomen, but with well-developed cerci`,
                                                key: `antennae-long`,
                                                answer: `Order Diplura (rare)`,
                                                summary: `These insects are rare mostly because they’re so small! They live in damp leaf litter, and moist soil, so they can be hard to find. Some species have the long cerci, like in the picture, and are plant eaters. Others have cerci that are forcepslike, and they are usually predators. Some species are omnivorous. Diplurans are ametabolous, which means they just eventually molt into the adult stage.`,
                                              },
                                              {
                                                title: `Antennae short, usually with 4 or fewer segments; abdomen with 6 or fewer segments, usually with forked appendage near posterior end`,
                                                key: `antennae-short`,
                                                answer: `Order Collembola`,
                                                summary: `Springtails get their name because they have a “furcula,” which is usually folded under the boy and snaps against a surface to make them “jump” when they’re threatened. Some springtails are longer and skinnier (like the picture), while others are much more round, like a ball. Most species of springtails breathe through their skin, instead of through trachea like other insects. Because of the way they breathe, springtails can dry out quickly, so they usually live in moist places. Springtails eat tiny things like mold spores and pollen grains, but will potentially eat just about anything, including bacteria. Mostly they are good for the ecosystem, but some humans consider them pests because they can eat food crops. These insects are very small, so they are easy to miss, but there are many of them out there. Springtails are ametabolous, which means they just eventually molt into the adult stage.`,
                                              },
                                            ],
                                          },
                                          {
                                            title: `Mouthparts usually distinct, mandibulate or haustellate; abdomen without appendages such as described in preceding entry; size variable`,
                                            key: `mouth-distinct`,
                                            items: [
                                              {
                                                title: `Body larviform, thorax and abdomen not differentiated; compound eyes present`,
                                                key: `larviform`,
                                                answer: `Order Coleoptera (rare larviform female beetles)`,
                                                summary: `There are a few genera of beetles where the adult female looks like a larva. Fireflies contain some of them. Sometimes the only visible difference between the actual larva and the adult female is that the adult female has compound eyes. Coleoptera are holometabolous, which means the larvae don’t usually look anything like the adults, and there is a pupal stage between the larval and adult stages. In this case the larvae might look like the adults, but there is still a pupal stage.`,
                                              },
                                              {
                                                title: `Body variable in shape, if larviform, then without compound eyes`,
                                                key: `variable`,
                                                items: [
                                                  {
                                                    title: `Compound eyes usually present; body shape variable, but usually not wormlike; wing pads often present (adult and nymphs)`,
                                                    key: `eyes-compound`,
                                                    items: [
                                                      {
                                                        title: `Tarsi 5-segmented`,
                                                        key: `five-segments`,
                                                        items: [
                                                          {
                                                            title: `Mouthparts prolonged ventrally into snoutlike structure; body more or less cylindrical, usually less than 15mm in length`,
                                                            key: `mouth-long`,
                                                            answer: `Order Mecoptera (rare; wingless scorpionflies)`,
                                                            summary: `The wingless scorpionfly is also called a wingless hanging fly. It is rare, but most likely to be found in central California in late spring.`,
                                                          },
                                                          {
                                                            title: `Mouthparts not as in preceding entry; body shape and size variable`,
                                                            key: `mouth-other`,
                                                            items: [
                                                              {
                                                                title: `Antennae 5-segmented; found mainly in Texas`,
                                                                key: `antennae-five`,
                                                                answer: `Order Strepsiptera (rare; some female twisted-wing parasites)`,
                                                                summary: `These rare insects are only found in Texas.`,
                                                              },
                                                              {
                                                                title: `Antennae with more than 5 segments; widely distributed`,
                                                                key: `antennae-many`,
                                                                items: [
                                                                  {
                                                                    title: `Cerci 1-segmented; body and legs very slender`,
                                                                    key: `one-segment`,
                                                                    items: [
                                                                      {
                                                                        title: `Head prognathous; widely distributed`,
                                                                        key: `prognathous`,
                                                                        answer: `Order Phasmatodea`,
                                                                        summary: `Insects in the order Phasmatodea look a lot like sticks, which is why they are also sometimes called walking sticks. However, there is a family in this order that mimics leaves too! This stick or leaf mimicry is excellent camouflage against predators, and some of the insects have extra outgrowths that make them even more convincing as plants. In addition to their natural camouflage, phasmids may have spines on their legs to harm predators, glands that release chemicals to drive predators away or hurt them if it gets in the predators’ mouths, or brightly colored wings to startle predators. Phasmids themselves are herbivores, and some are considered pests because they eat leaves and can damage trees. Not all of the Phasmids can fly, which isn’t surprising because some of them can get up to almost 2 feet long. They are nocturnal and use their compound eyes for seeing well with very little light. Phasmids are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                                                                      },
                                                                      {
                                                                        title: `Head hypognathous; known only from Africa`,
                                                                        key: `hypognathous`,
                                                                        answer: `Order Mantophasmatodea (rare)`,
                                                                        summary: `Mantophasmids are very rare, and found only in Africa. They are hemimetabolous, which means the young ones (called nymphs) look like the adults. In other orders, the adults will have wings, but the Mantophasmids don’t. Mantophasmids are nocturnal, and are ambush hunters, and eat other arthropods, including spiders.`,
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    title: `Cerci with 8 or more segments; body shape variable`,
                                                                    key: `many-segments`,
                                                                    items: [
                                                                      {
                                                                        title: `Body flattened and oval, head more or less concealed from above by pronotum; ocelli usually present; widely distributed`,
                                                                        key: `flattened`,
                                                                        answer: `Order Blattodea (cockroaches)`,
                                                                        summary: `If you found a cockroach in your house, chances are you were grossed out! But don’t let their bad reputation keep you from learning and appreciating this order. The cockroaches that may live in our houses only represent a fraction of all of the Blattodea species. Most cockroaches are pretty small, but in Central and South America they may get big living in the tropics. The forewings of cockroaches are called tegmina, and are leathery, but not necessarily hard. Cockroaches eat just about anything with their chewing mouthparts. Many cockroaches live on land, but some are aquatic. Regardless of wet or dry, cockroaches live on every continent (even Antarctica!). Cockroaches are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                                                                      },
                                                                      {
                                                                        title: `Body elongate and cylindrical, head not concealed from above by pronotum; ocelli absent; US Northwest and western Canada`,
                                                                        key: `elongate`,
                                                                        answer: `Order Grylloblattodea (rare)`,
                                                                        summary: `Ice crawlers live exactly where their name says: in the ice: they can be found on mountaintops and the edges of glaciers. Ice crawlers are omnivorous, eating just about anything they can find- even dead animals. They are nocturnal, and are usually present in leaf litter or under rocks. Ice crawlers are hemimetabolous, which means the young ones (called nymphs) look like the adults. Most adult hemimetabolous insects have wings, but ice crawlers do not.`,
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
                                                        title: `Tarsi with 4 or fewer segments`,
                                                        key: `few-segments`,
                                                        items: [
                                                          {
                                                            title: `Forcepslike cerci; tarsi 3-segmented`,
                                                            key: `forcepslike`,
                                                            items: [
                                                              {
                                                                title: `Antennae more than half as long as body; cerci short; western United States`,
                                                                key: `antennae-long`,
                                                                answer: `Order Phasmatodea (Timema; rare)`,
                                                                summary: `Phasmatodea are also called walking sticks. Walking sticks are usually long and slender, but the ones in the genus Timema are stouter. Due to their forcepslike cerci, they almost look like earwigs. Like other Phasmids, Timema are nocturnal herbivores. Unlike other Phasmids, they have 3 tarsal segments vs. the normal 5. Timema have so far only been found on the west coast of North America, in California mostly. If you found a Timema phasmid, that’s awesome!`,
                                                              },
                                                              {
                                                                title: `Antennae usually less than half as long as body; cerci long; widely distributed`,
                                                                key: `antennae-short`,
                                                                answer: `Order Dermaptera (earwigs)`,
                                                                summary: `Most earwigs have the easily recognizable forceps-like pincers called cerci. The pincers of males tend to be more curved, but both males and females can use their pincers for tasks such as grabbing things and defense. Earwigs have membranous hindwings that are thin, and have to be folded to fit under their forewings, which are short and leathery. The earwigs use their pincers to help fold up the wings! Most earwigs can fly with their hindwings, but it doesn’t happen very often (at least when a human is watching!). Earwigs are mostly omnivorous scavengers, but some are predators. They move around mostly at night, and are considered pests by most people because they include garden plants in their diets. Earwigs are good at hiding under things since they are flattened, so during the day they squeeze into tight spaces. Dermapterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. Earwigs are just as likely to crawl in your ear as any other insect (which is highly unlikely), so don’t worry!`,
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            title: `Cerci absent or, if present, not forcepslike; tarsi variable`,
                                                            key: `not-forcepslike`,
                                                            items: [
                                                              {
                                                                title: `Tarsi 3-segmented, basal segment of front tarsi enlarged`,
                                                                key: `three-segments`,
                                                                answer: `Order Embiidina (rare; webspinners)`,
                                                                summary: `Webspinners use the silk they spin to make “galleries” that they live in. In their galleries they are protected from predators among other things. A gallery usually has more than just one webspinner in it. The females lay their eggs in the gallery, and take care of them for a little while after they hatch. Webspinners eat plants, except for the adult males, which don’t eat at all. The males die quickly, so they leave the gallery as soon as they can to find a mate. If you’ve found a webspinner, good job! They are pretty rare. Webspinners are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
                                                              },
                                                              {
                                                                title: `Tarsi 2-segmented to 4-segmented, basal segment of front tarsi not enlarged`,
                                                                key: `even-segments`,
                                                                items: [
                                                                  {
                                                                    title: `Grasshopper-like insects, with hind legs enlarged and fitted for jumping; length usually over 15mm`,
                                                                    key: `grasshopper-like`,
                                                                    answer: `Order Orthoptera (grasshoppers)`,
                                                                    summary: `All insects in the order Orthoptera use song to attract mates. Usually it’s only the males that “sing,” but in the Katydid (or bush cricket) family, females sing too. Although you may think of the jumping insects when you think of crickets, mole crickets are also orthopterans. Mole crickets have front legs that are adapted for digging, and live underground. When they sing, they do it from a burrow that opens out like a horn, so it’s very loud! Orthopterans are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. If you caught a grasshopper or cricket, congratulations! They’re good jumpers and can be hard to sneak up on!`,
                                                                  },
                                                                  {
                                                                    title: `Not grasshopper-like, hind legs usually not as above; length less than 10mm`,
                                                                    key: `not-grasshopper`,
                                                                    items: [
                                                                      {
                                                                        title: `Tarsi 4-segmented; pale, soft-bodied, wood- or ground-inhabiting insects`,
                                                                        key: `four-segments`,
                                                                        answer: `Order Isoptera (termites)`,
                                                                        summary: `You can easily tell the difference between a termite and an ant, because termites don’t have a constricted waist (see Hymenoptera). Termites are “eusocial” insects, and live in large colonies. The term eusocial means that the castes (workers, soldiers, kings, and queens) all look different, even if they’re the same species. It also means that they take care of their young, and defend their colonies (among other things!). Termites eat cellulose, so that means that they often eat wood, but it can also be other types of plant material. Termites are actually very important for ecosystems, even though they are considered pests when they’re in our houses. Some termites make nests, and some live underground in mounds. But they’ll always be found in warm areas, because they are considered “soft” bodied, which means they freeze easily. Isoptera are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings. Development is complicated in this order, though, due to the different castes.`,
                                                                      },
                                                                      {
                                                                        title: `Tarsi 2-segmented or 3-segmented; color and habits variable`,
                                                                        key: `few-segments`,
                                                                        items: [
                                                                          {
                                                                            title: `Cerci present, 1-segmented, terminating in long bristle; antennae 9-segmented, moniliform; compound eyes and ocelli absent; tarsi 2-segmented`,
                                                                            key: `cerci`,
                                                                            answer: `Order Zoraptera (rare)`,
                                                                            summary: `These little guys are very rare, so if you found one, congratulations! There are only 44 species that we know of, in one genus: Zorotypus. Zorapterans live in colonies in or under rotting wood, and mainly eat fungal spores and dead plant material. Sometimes they are hunters of other tiny insects and mites.`,
                                                                          },
                                                                          {
                                                                            title: `Cerci absent; antennae with 13 or more segments, usually long and hairlike; compound eyes and 3 ocelli usually present; tarsi 2-segmented or 3-segmented`,
                                                                            key: `no-cerci`,
                                                                            answer: `Order Psocoptera (psocids)`,
                                                                            summary: `The insects in the Order Psocoptera are mostly scavengers. When they’re outside, they like to eat lichen and fungi, but if they get inside they might eat the paste in your book bindings or the glue that holds wallpaper to walls! This doesn’t happen very often though, compared to other types of insects that like to eat starch. Psocoptera mainly live outside. They are hemimetabolous, which means the young ones (called nymphs) look like the adults, but the adults have wings.`,
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
                                                    title: `Compound eyes and wing pads absent; body usually wormlike in shape (larvae)`,
                                                    key: `compound-eyes`,
                                                    items: [
                                                      {
                                                        title: `Ventral prolegs present on 2 or more abdominal segments`,
                                                        key: `ventral`,
                                                        items: [
                                                          {
                                                            title: `With 5 pairs of prolegs (on abdominal segments 3-6 and 10) or fewer, prolegs with tiny hooks (crochets); several (usually 6) stemmata on each side of head`,
                                                            key: `five-pairs`,
                                                            answer: `Order Lepidoptera (caterpillars, butterfly and moth larvae)`,
                                                            summary: `The larvae of insects in the order Lepidoptera are commonly called caterpillars. Be careful, though, because the larvae of some other insects (such as sawflies) are also called caterpillars. Almost all of the Lepidopteran larvae are herbivores. Some may feed on animal products though, such as wool. Many lepidopteran larvae are considered pests, not only because of what they eat, but because they eat a lot! Lepidopteran larvae have soft bodies, and come in many shapes and sizes. Some are brightly colored or have ornamentations (like spines) to warn predators away from them. Others are dull colored or may be mottled to blend in with their environment. Most of the time the butterfly or moth that comes from a caterpillar looks completely different than the coloring would suggest. Although some larvae are very distinctive and can be associated with their adult form, others are not. So if you found a caterpillar that’s a moth or butterfly larvae, you should hang onto it until it turns into an adult to see what you get!`,
                                                          },
                                                          {
                                                            title: `With 6 or more pairs of abdominal prolegs, prolegs without crochets; number of stemmata variable`,
                                                            key: `many-pairs`,
                                                            items: [
                                                              {
                                                                title: `Seven or more stemmata on each side of head; prolegs on segments 1-8 or 3-8, usually inconspicuous, pointed structures`,
                                                                key: `many-stemma`,
                                                                answer: `Order Mecoptera (rare; scorpionfly larvae)`,
                                                                summary: `Larvae of scorpionflies like moisture! You’ll probably see them when it’s been damp. Most of the larvae are omnivorous and will eat plants and dead insects, but some are predators. These larvae have compound eyes, which is unusual for larval stages of insects. Other than that, though, they may look a lot like the caterpillar of a moth or butterfly.`,
                                                              },
                                                              {
                                                                title: `One stemma on each side of head; prolegs fleshy, not pointed, usually on abdominal segments 2-8 and 10, sometimes on 2-7 or 2-6 and 10`,
                                                                key: `one-stemma`,
                                                                answer: `Order Hymenoptera (sawfly larvae)`,
                                                                summary: `Sawfly larvae are easy to mistake for butterfly or moth larvae if you don’t know what you’re looking for. They like to eat plants and tend to eat in groups, which is why many humans consider them pests. Like the lepidopteran larvae, they can eat a lot of food, and may destroy the plant they’re feeding on.`,
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        title: `Abdominal prolegs absent or on terminal segment only`,
                                                        key: `abdominal`,
                                                        items: [
                                                          {
                                                            title: `Mandible and maxilla on each side united to form sucking jaw that is often long; tarsi with 2 claws; labrum absent or fused with head capsule; maxillary palps absent`,
                                                            key: `mandible-sides`,
                                                            answer: `Order Neuroptera (Planipennia: larvae of lacewings and antlions)`,
                                                            summary: `Larvae of antlions and lacewings are predators. Their specialized jaws are able to suck the juices out of their prey. Antlions actually inject venom into their prey, which paralyzes and digests the inside of it before it is sucked out. Antlion larvae build pit traps for its prey. When the prey walks by it often falls into the pit and the waiting jaws of the antlion. Antlions don’t move around very well outside of their pits, and have the nickname “doodlebug” because of the meandering paths they take.`,
                                                          },
                                                          {
                                                            title: `Mandibles and maxillae not as in preceding entry; tarsi with 1 or 2 claws; labrum and maxillary palps usually present`,
                                                            key: `mandible-other`,
                                                            items: [
                                                              {
                                                                title: `Head and mouthparts directed forward (prognathous), head about as long along midventral line as along middorsal line, usually cylindrical or somewhat flattened`,
                                                                key: `prognathous`,
                                                                items: [
                                                                  {
                                                                    title: `Tarsi with 1 claw`,
                                                                    key: `one-claw`,
                                                                    answer: `Order Coleoptera (some beetle larvae)`,
                                                                    summary: `The coleopteran larvae are just as diverse as the adults. Beyond a few easily recognizable larvae (like white grubs and lady beetles), there aren’t many defining features that will tell you what kind of beetle your larva will turn into. Take note of its habitat and the time of year you found it, and then check out the Resources page to keep looking!`,
                                                                  },
                                                                  {
                                                                    title: `Tarsi with 2 claws`,
                                                                    key: `two-claws`,
                                                                    items: [
                                                                      {
                                                                        title: `Distinct labrum and clypeus present`,
                                                                        key: `labrum`,
                                                                        answer: `Order Neuroptera (Raphidioptera: snakefly larvae)`,
                                                                        summary: `The heads of snakefly larvae look a lot like the heads of the adults. The rest of the body is very squishy, though. These larvae are predatory, but they aren’t very strong, so they mostly eat very small arthropods (mites and barklice) or arthropod eggs.`,
                                                                      },
                                                                      {
                                                                        title: `Labrum absent or fused with head capsule`,
                                                                        key: `no-labrum`,
                                                                        answer: `Order Coleoptera (most Adephaga: beetle larvae)`,
                                                                        summary: `Adephaga is a large suborder, containing at least 11 families of ground and water beetles. Many of the larvae and adult beetles in this suborder are predators. Because of the size of this suborder, it may be difficult to figure out which beetle you found, especially if it’s just the larvae. Take note of its surroundings and the time of year, and go to the Resources page to keep looking!`,
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                title: `Head and mouthparts directed ventrally (hypognathous), head much longer along middorsal line than along midventral line and usually rounded`,
                                                                key: `hypognathous`,
                                                                items: [
                                                                  {
                                                                    title: `Front legs distinctly smaller than other pairs; middle and hind legs projecting laterally much more than front legs; small group of stemmata (usually 3) on each side of head behind bases of antennae; tarsal claws absent; length less than 5mm; usually found in moss`,
                                                                    key: `legs-small`,
                                                                    answer: `Order Mecoptera (rare; larvae of Boreidae)`,
                                                                    summary: `Insects in the family Boreidae are called snow scorpionflies. They are wingless (or have reduced wings that look like bristles), and live in the snow, as their name implies, and are most active during the winter and early spring months. Snow scorpionflies look a lot like other scorpionflies, but they aren’t usually as brightly colored. These insects are rare, so if you found one, congratulations!`,
                                                                  },
                                                                  {
                                                                    title: `Legs not as in preceding entry, front and middle legs about the same size and position; stemmata variable; tarsi with 1-3 claws; size and habitat variable`,
                                                                    key: `legs-other`,
                                                                    items: [
                                                                      {
                                                                        title: `Tarsi with 1 or 2 claws; abdomen usually without caudal filaments; antennae variable`,
                                                                        key: `few-claws`,
                                                                        answer: `Order Coleoptera (beetle larvae)`,
                                                                        summary: `The coleopteran larvae are just as diverse as the adults. Beyond a few easily recognizable larvae (like white grubs or lady beetles), there aren’t many defining features that will tell you what kind of beetle your larva will turn into. Take note of its habitat and the time of year you found it, and then check out the Resources page to keep looking!`,
                                                                      },
                                                                      {
                                                                        title: `Tarsi usually with 3 claws; abdomen with 2 caudal filaments about one third as long as body; antennae usually short, 3-segmented`,
                                                                        key: `three-claws`,
                                                                        answer: `Order Coleoptera (rare; triungulin larvae of some beetles (Meloidae)) and Strepsiptera (rare)`,
                                                                        summary: `Triungulin larvae get the name from their 3 tarsal claws. They are special in another way, though, and are very rare. These larvae are parasites, and they are able to move around very well to find their hosts, which will usually be bees. Triungulin larvae of the blister beetle, for example, will either be carried by an adult, or crawl on its own to the nest of a bee and eat the bee larvae and the food in its cell. The larvae will then molt to a grub that looks more typical of beetle larvae.`,
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
            title: `Body more or less wormlike, body regions (except possibly head) not well differentiated, segmented thoracic legs absent; antennae present or absent (larvae and some adults)`,
            key: `wormlike`,
            items: [
              {
                title: `Aquatic`,
                key: `aquatic`,
                answer: `Order Diptera (fly larvae)`,
                summary: `There are several families of Diptera that have aquatic larvae, such as crane flies and mosquitoes. Most aquatic larvae are very similar, so put yours in a jar with some water and check out the Resources page to see if you can learn more about it!`,
              },
              {
                title: `Not aquatic, but terrestrial or parasitic`,
                key: `terrestrial`,
                items: [
                  {
                    title: `Sessile, plant feeding; body covered by a scale or waxy material; mouthparts haustellate, long and threadlike`,
                    key: `plant-feeding`,
                    answer: `Order Hemiptera (female scale insects)`,
                    summary: `Female scale insects are covered by… you guessed it: a scale! The scale is just a protective covering for the insect underneath, though. You might not even know there’s an insect under there if you don’t look. Female scale insects live under their scale for their whole live. When a female egg hatches, the larva can move around. It makes its way to a good spot on a plant, then molts, losing its legs. Since the males have legs and wings, when it’s time to mate, they find the female.`,
                  },
                  {
                    title: `Not exactly fitting the preceding description`,
                    key: `other`,
                    items: [
                      {
                        title: `Head and thorax more or less fused, abdominal segmentation indistinct; internal parasites of other insects`,
                        key: `fused`,
                        answer: `Order Strepsiptera (rare; female twisted-wing parasites)`,
                        summary: `Female Strepsiptera are parasites of other insects. You can actually see their head sticking out from an insect’s cuticle (usually between segments). After a female egg hatches, the larva is triungulin, and finds its way to a host. It secretes enzymes to soften the host’s cuticle, then molts into its immobile form inside the host. Male twisted-wing parasites can fly to a female, and inseminate her at a place between her head and thorax. The female develops the eggs in her body, and that is where they hatch too.`,
                      },
                      {
                        title: `Head not fused with thorax, body segmentation distinct; habitat variable`,
                        key: `not-fused`,
                        items: [
                          {
                            title: `Head distinct, sclerotized (hard), usually pigmented and exserted`,
                            key: `sclerotized`,
                            items: [
                              {
                                title: `Head and mouthparts directed forward (head prognathous), head about as long along midventral line as along middorsal line, usually cylindrical or somewhat flattened`,
                                key: `mouth-foward`,
                                items: [
                                  {
                                    title: `Terminal abdominal segment with a pair of short, pointed processes; several long setae on each body segment`,
                                    key: `terminal`,
                                    answer: `Order Siphonaptera (rare; flea larvae)`,
                                    summary: `Flea larvae live on the ground, which is where their eggs usually hatch, but they like the dark, and will hide if possible. They’ll eat just about any organic matter they can find, like skin cells, other flea eggs, and the “flea dirt” (feces) from adult fleas. Fleas feed on mammals, so if you find a flea larva, let someone know!`,
                                  },
                                  {
                                    title: `Not exactly fitting the description in the preceding entry`,
                                    key: `other`,
                                    items: [
                                      {
                                        title: `Labium with protruding spinneret; antennae arising from membranous area at bases of mandibles; mandibles well developed, opposable; body usually more or less flattened; ventral prolegs usually with crochets; mostly leafminers in leaves, bark, or fruits`,
                                        key: `spinneret`,
                                        answer: `Order Lepidoptera (moth larvae)`,
                                        summary: `The larvae of moths are called caterpillars. Be careful, though, because the larvae of some other insects (such as sawflies) are also called caterpillars. It is hard to tell the difference between moth and butterfly caterpillars, unless you see their pupal case. A moth’s pupal case is called a “cocoon.” However, the caterpillar you just found may already live in its case if it’s a bagworm. Since the caterpillar you found has well-developed mandibles, it’s great at eating leaves and fruit, and may be considered a pest if there’s too many of them!`,
                                      },
                                      {
                                        title: `Labium without spinneret; antennae, if present, arising from head capsule; prolegs without crochets`,
                                        key: `no-spinneret`,
                                        items: [
                                          {
                                            title: `Mouthparts distinctly mandibulate, with opposable mandibles; spiracles usually present on thorax and 8 abdominal segments; body shape variable`,
                                            key: `mandibulate`,
                                            answer: `Order Coleoptera (beetle larvae; probably carnivorous)`,
                                            summary: `The coleopteran larvae are just as diverse as the adults. Beyond a few easily recognizable larvae (like white grubs or lady beetles), there aren’t many defining features that will tell you what kind of beetle your larva will turn into. Take note of its habitat and the time of year you found it, and then check out the Resources page to keep looking!`,
                                          },
                                          {
                                            title: `Mouthparts as in preceding entry or with mouth hooks more or less parallel and moving vertically; spiracles variable, but usually not as in preceding entry; body elongate`,
                                            key: `mouth-hooks`,
                                            answer: `Order Diptera (fly larvae)`,
                                            summary: `Larvae of many flies are called maggots. Fly maggots tend to eat dead things and dung, and use their mouth hooks to help. If you think that’s gross, it might help to remember that if they didn’t eat it, it would still be around! Maggots are very important parts of our ecosystem, and help by cleaning it up.`,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                title: `Head and mouthparts directed ventrally (head hypognathous), head much longer along middorsal line (top) than along midventral (bottom) line and usually rounded`,
                                key: `hypognathous`,
                                items: [
                                  {
                                    title: `Abdominal segments usually with 1 or more longitudinal folds laterally or lateroventrally; body C-shaped, scarabaeiform; 1 pair of spiracles on thorax, usually 8 pairs on abdomen`,
                                    key: `longitudinal`,
                                    answer: `Order Coleoptera (white grubs; beetle larvae)`,
                                    summary: `White grubs are beetle larvae. These have a characteristic “C” shape, and are found underground. There are many beetles that have larvae that look like white grubs, though, so you may not know which Beetle it’s going to turn into, although it will probably be in the family Scarabaeidae. Pay close attention to when you found it (the month or season), where you found it (in a lawn or in dung), and if there are adults around to give you clues. Then check out the Resources page to do more research!`,
                                  },
                                  {
                                    title: `Abdominal segments without longitudinal folds, or if such folds present, then spiracles not as in preceding entry`,
                                    key: `not-longitudinal`,
                                    items: [
                                      {
                                        title: `Head with adfrontal areas; labium with protruding spinneret; antennae, if present arising from membranous area at base of mandibles; often 1 or more (usually 6) stemmata on each side of head; ventral prolegs, if present, with crochets`,
                                        key: `adfrontal`,
                                        answer: `Order Lepidoptera (moth larvae)`,
                                        summary: `The larvae of insects in the order Lepidoptera are commonly called caterpillars. Be careful, though, because the larvae of some other insects (such as sawflies) are also called caterpillars. It is hard to tell the difference between moth and butterfly caterpillars, unless you see their pupal case. A moth produces a “cocoon,” which is often covered in silk and looks soft. A butterfly produces a “chrysalis,” which looks hard and might be shiny. Almost all of the Lepidopteran larvae are herbivores. Some may feed on animal products though, such as wool. Many lepidopteran larvae are considered pests, not only because of what they eat, but because they eat a lot! Lepidopteran larvae have soft bodies, and come in many shapes and sizes. Some are brightly colored or have ornamentations (like spines) to warn predators away from them. Others are dull colored or may be mottled to blend in with their environment. Most of the time the butterfly or moth that comes from a caterpillar looks completely different than the coloring would suggest. Although some larvae are very distinctive and can be associated with their adult form, others are not. So if you found a caterpillar that’s a moth or butterfly larvae, you should hang onto it until it turns into an adult to see what you get!`,
                                      },
                                      {
                                        title: `Head without adfrontal areas; labium without spinneret; antennae and stemmata not as in preceding entry; prolegs, if present, without crochets`,
                                        key: `no-adfrontal`,
                                        items: [
                                          {
                                            title: `Mandibles not heavily sclerotized and not brushlike; spiracles usually present on thorax and most abdominal segments, posterior pair not enlarged; larvae occurring in plant tissues, as parasites, or in cells constructed by adults`,
                                            key: `sclerotized`,
                                            answer: `Order Hymenoptera (Apocrita)`,
                                            summary: `Insects in the suborder Apocrita include ants, bees, and wasps. There are lots of different families in this suborder, so you’ll probably need to do more research to figure out which bug you have. Looking at its surroundings will help, though. Does it live underground? In a nest with cells? Is the nest attached to a house or a tree? What other insects are around it? If you found the larvae of one of these insects, you’ll probably find adults nearby, since the larvae require the adults help to grow. See if you can catch an adult and use the Resources page to figure out what it is!`,
                                          },
                                          {
                                            title: `Mandibles usually brushlike; spiracles usually not as in preceding entry - if present in several abdominal segments, posterior pair much larger than others; occurring in wet places, in plant tissues, or as internal parasites`,
                                            key: `brushlike`,
                                            answer: `Order Diptera (fly larvae; mostly Nematocera)`,
                                            summary: `The suborder Nematocera contains insects such as mosquitoes, gnats, black flies, and crane flies, to name a few. Mosquitoes, some gnats, and black flies bite humans, but crane flies do not. Most of these insects have aquatic larvae, but some are semi-aquatic or terrestrial. The brushlike mandibles of the larva you might be looking at help it to filter food out of its environment.`,
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
                            title: `Head indistinct, incompletely or not at all sclerotized, sometimes retracted into thorax`,
                            key: `indistinct`,
                            items: [
                              {
                                title: `Mouthparts of normal mandibulate type, with opposable mandibles and maxillae; antennae usually present`,
                                key: `mandibulate`,
                                answer: `Order Coleoptera (beetle larvae)`,
                                summary: `The coleopteran larvae are just as diverse as the adults. Beyond a few easily recognizable larvae (like white grubs and lady beetles), there aren’t many defining features that will tell you what kind of beetle your larva will turn into. Take note of its habitat and the time of year you found it, and then check out the Resources page to keep looking!`,
                              },
                              {
                                title: `Mouthparts reduced or modified, with only mandibles opposable, or with parallel mouth hooks present; antennae usually absent`,
                                key: `other`,
                                items: [
                                  {
                                    title: `Body behind "head" (first body segment) consisting of 13 segments; full-grown larvae usually with sclerotized ventral plate ("breast bone") located ventrally behind head`,
                                    key: `many-segments`,
                                    answer: `Order Diptera (larvae of Cecidomyiidae)`,
                                    summary: `Insects in the family Cecidomyiidae are commonly called gall midges. These tiny insects have hairy wings when they’re adults, and look a lot like mosquitoes up close. Gall midges lay their eggs in plants, and as the larvae feed it creates the gall. If you see a gall midge larva with the “breast bone” that’s shown in the picture, it is in its last stage before pupation. Gall midges can be brightly colored too (pink, orange, red, yellow), not just white like the one in the picture.`,
                                  },
                                  {
                                    title: `Body consisting of fewer segments, no "breast bone"`,
                                    key: `few-segments`,
                                    items: [
                                      {
                                        title: `Mouthparts consisting of 1 or 2 (if 2 then parallel, not opposable) median, dark-colored, decurved mouth hooks`,
                                        key: `mouth-hooks`,
                                        answer: `Order Diptera (maggots; larvae of Muscomorpha)`,
                                        summary: `Maggots of muscomorphid flies tend to eat dead things and dung, and use their mouth hooks to help. If you think that’s gross, it might help to remember that if they didn’t eat it, it would still be around! Maggots are very important parts of our ecosystem, and help by cleaning it up.`,
                                      },
                                      {
                                        title: `Mandibles opposable, but sometimes reduced, without mouth hooks as described in preceding entry`,
                                        key: `mandibles`,
                                        answer: `Order Hymenoptera (larvae of Apocrita)`,
                                        summary: `Insects in the suborder Apocrita include ants, bees, and wasps. There are lots of different families in this suborder, so you’ll probably need to do more research to figure out which bug you have. Looking at its surroundings will help, though. Does it live underground? In a nest with cells? Is the nest attached to a house or a tree? What other insects are around it? If you found the larvae of one of these insects, you’ll probably find adults nearby, since the larvae require the adults help to grow. See if you can catch an adult and use the Resources page to figure out what it is!`,
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
]

/*!
 *
 */

const questions = {
  items: [
    ...eightLegs,
    ...sixLegs
  ]
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
  const { items } = obj
  const msg = JSON.stringify({ ...obj, items: '...' })

  console.log('validate: ', obj)

  // Ensure we have all required data
  if (!obj.title) throw new Error('Missing `title`, obj=' + msg)
  if (!obj.answer && !items) throw new Error('Missing `question` or `answer`, obj=' + msg)

  // Auto populate URL key if none provided
  if (!obj.key) {
    console.warn('Missing `key`, obj=' + msg)
    obj.key = getKey(obj)
  }

  if (items && items.length) items.forEach(validate)
}
questions.items.forEach(validate)

/*!
 * Exports
 */

module.exports = questions



// 93?

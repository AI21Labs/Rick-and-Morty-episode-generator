import { API_KEY } from './apiKey.consts'
export const PLOT_PROMPT_ENDPOINT = "https://api.ai21.com/studio/v1/j1-grande/complete";
export const generatePlotOptions = (title) => {
  return {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
    },
      body: JSON.stringify({
      numResults: 1,
      maxTokens: 400,
      temperature: 0.8,
      topKReturn: 0,
      topP:1,
      stopSequences:["\n##"],
      countPenalty: {
        scale: 0,
        applyToNumbers: false,
        applyToPunctuations: false,
        applyToStopwords: false,
        applyToWhitespaces: false,
        applyToEmojis: false
      },
      frequencyPenalty: {
        scale: 0,
        applyToNumbers: false,
        applyToPunctuations: false,
        applyToStopwords: false,
        applyToWhitespaces: false,
        applyToEmojis: false
      },
      presencePenalty: {
        scale: 0,
        applyToNumbers: false,
        applyToPunctuations: false,
        applyToStopwords: false,
        applyToWhitespaces: false,
        applyToEmojis: false
      },
        prompt: `Generate a Rick and Morty episode based on the title.\nTitle: The Rickchurian Mortydate\nEpisode:\nThe President calls on Rick and Morty to defeat a monster in the tunnels underneath the White House, which they do with little effort. Annoyed that he constantly calls on them without any gratitude, they go back home to play Minecraft, with the President quickly finding out. The resulting argument leads to a battle of egos that culminates in a fight in the White House between Rick and the President's security. Meanwhile, fearing she might be a clone made by Rick, Beth reunites with Jerry to figure out the truth. Shortly after, the entire family gets together to hide from Rick, but he tracks them down. Rick eventually submits to Jerry once again being a family member. Rick ends his conflict with the President by pretending to be Fly Fishing Rick, a Rick from a different reality, and calling a truce. The episode ends with the family happy to be together again, except for Rick who is disappointed about losing his dominant position.\n##\nGenerate a Rick and Morty episode based on the title.\nTitle: The Whirly Dirly Conspiracy\nEpisode:\nTo bolster Jerry's self-esteem, Rick takes him on an adventure at Morty's request. They visit an otherworldly resort within an immortality field so Jerry won't be harmed while away. Jerry encounters Risotto Groupon, an alien who blames Rick for his kingdom being usurped. Risotto enlists Jerry in a plot to kill Rick, but Jerry backs out after Rick apologizes for ruining his marriage. The attempt fails, and Rick realizes Jerry's involvement, sparking a monologue of him accusing Jerry of deliberately acting helpless to guilt others into helping him, such as making Beth feel she was obligated to marry him. After Rick kills Risotto, he softens his attitude towards Jerry, but refuses to allow him to return to the family. Meanwhile, Summer deals with self-esteem issues as well. Her boyfriend, Ethan, leaves her for a larger-breasted girlfriend, and Summer attempts to enlarge her own breasts using one of Rick's devices. Her aim is off, and she grows to bizarre proportions. Morty wants to call Rick for assistance, but Beth refuses. Arrogantly trying to prove her own self-worth, Beth repeatedly fails to fix the problem and ends up turning Summer inside-out. Beth is then tricked into releasing three tiny technical support workers that were trapped inside the machine when she calls for tech support. Summer disappears to the campsite she and Ethan were supposed to go, still inside out. Beth turns herself inside out and talks to Summer. Once Morty figures out how the machine works, he restores Summer's size and spitefully uses it to deform Ethan in an act of vengeance.\n##\nGenerate a Rick and Morty episode based on the title.\nTitle: Solaricks\nEpisode:\nSaved from the Citadel ruins by Space Beth, Rick attempts to reset the settings on his portal gun, but accidentally sends everyone who has traveled interdimensionally to their original dimensions. Morty returns to Cronenberg World from \"Rick Potion #9\", Jerry swaps places with \"Season Two Jerry\" because of the events of \"Mortynight Run\", and Rick is transported to his original universe where his wife Diane and his Beth were killed by Rick Prime,[2] who is Morty's true grandfather. As Summer and both Beths travel back to the Citadel to establish an interdimensional beacon, Rick learns that Rick Prime was also transported by the reset. The original Jerry tells Morty that his Beth and Summer did not survive being frozen in \"The Rickshank Rickdemption\"[a]. Jerry abandons Morty in order to move on. Rick rescues Morty and takes him to confront Rick Prime but finds an elaborate trap. Morty convinces him to save the rest of the family instead. However, once the family picks up Jerry and returns home, they are confronted by Season Two Jerry, who releases an alien named Mr. Frundles that rapidly replicates and forces the family to relocate to a replacement dimension where their counterparts all died.\n##\nGenerate a Rick and Morty episode based on the title.\nTitle: Close Rick-counters of the Rick Kind\nEpisode:\nThe show's original Rick is wrongfully accused of murdering twenty-seven Ricks from alternate dimensions and kidnapping their respective Mortys. The Trans-Dimensional Council of Ricks arrests him and finds him guilty, upon discovering incriminating evidence which was actually fabricated to frame him. Rick and Morty escape and are chased by a few duplicates of themselves. The Smith household is flooded with other Ricks and Jerry develops a friendship with the good-natured \"Doofus Rick\". The real culprits seem to be an \"Evil\" Rick and his Evil Morty, who have been using Mortys' low intelligence brainwaves as a way to conceal themselves. They capture the original Rick and Morty, but the original Morty leads a rebellion of alternate Mortys and releases the original Rick. Rick informs the Council about the real killer, thus clearing his own name. After Rick and Morty depart, the Council discovers that Evil Rick was actually under control by an unknown puppet-master, which was Evil Morty all along. Evil Morty escapes by blending into the crowd of Mortys without a Rick.\n##\nGenerate a Rick and Morty episode based on the title.\nTitle: The ABC's of Beth\nEpisode:\nRick and Beth enter Froopyland, a fantasy world created by Rick for young Beth. Their goal is to recover Tommy, Beth's childhood friend who has been trapped in Froopyland, and prevent the execution of his father, who is being falsely accused of eating him. Tommy, who has survived all these years by resorting to bestiality, incest and cannibalism, refuses to return to the real world. Rick and Beth manage to save his father's life by creating a clone of Tommy. Back at home, Beth is presented with the option of having a replacement clone of her created, so that she will be free to travel the world. Meanwhile, Jerry dates an alien hunter named Kiara, to Morty and Summer's dismay. When he decides to get out of the relationship, Kiara is enraged and tries to kill the kids, whom she holds responsible. The situation is resolved following the revelation that Kiara was using Jerry to get over her previous boyfriend, much like Jerry was doing with her.\n##\nGenerate a Rick and Morty episode based on the title.\nTitle: Look Who's Purging Now\nEpisode:\nRick and Morty visit another planet to purchase wiper fluid and witness \"The Festival\", an annual event where the local populace commits crimes for one night without consequence. After initial hesitation, Morty forces Rick to rescue Arthricia, a young alien girl, who proceeds to betray them, stealing Rick's gun and spaceship. Rick calls Summer, who transports them advanced armor suits. Morty then goes on a seemingly uncharacteristic killing spree before Rick knocks him out, and he and Arthricia—who desired to stop the Festival—storm the castle of the corrupt nobility who introduced it, slaughtering them. The planet's remaining inhabitants decide to create a new society; however, rioting breaks out over disputes, and one suggests keeping the Festival after all. Morty feels guilt over his rampage, but Rick (falsely) blames it on the effects of a candy bar he ate, and asserts that his character remains unchanged.\n##\nGenerate a Rick and Morty episode based on the title.\nTitle: Full Meta Jackrick\nEpisode:\nAfter venturing beyond the fourth wall into the meta where all fictional characters exist, Rick and Morty fall into a trap set by Story Lord from \"Never Ricking Morty\". Story Lord steals Rick's device which allows him to travel to the real world and seek out his creator, Jan. Meanwhile, Rick and Morty, seeking a way back to the real world, infiltrate the fortress of the \"Self-Referential Six\", a group of \"meta nerds\" who all have reality-warping powers based on narrative techniques and devices (such as plot twists and continuity errors), but are attacked by the group and forced to flee back into the meta. They are rescued by Joseph Campbell, who assists them in creating a device to return to the real world to confront Story Lord. Jan and Story Lord have created a machine capable of siphoning motivation from the universe's inhabitants to fuel Story Lord's own \"motivation.\" Morty, with the assistance of a spectral Campbell, convinces Jan to stop operating the machine, depowering Story Lord and allowing Rick to defeat him. At Morty's and Campbell's prompting, Jan kills Story Lord. After Rick and Morty depart, he becomes inspired to continue writing, much to the spectral Campbell's dismay.\n##\nGenerate a Rick and Morty episode based on the title.\nTitle:${title}\nEpisode:\n`,
      })
  };
};
var static_link = "/assets/pages/company/team/"
var members = [
    {
        "division" : "leadership",
        "members" : [
            {
                "name" : "Himeko",
                "position" : "Co-Founder & Lead Innovation Officer",
                "file-name" : "himeko.jpg"
            },
            {
                "name" : "Nepgyah",
                "position" : "Co-Founder / Lead Dev & Miru Lead",
                "file-name" : "me.png"
            },
            {
                "name" : "Yukong",
                "position" : "Head Logistics Director",
                "file-name" : "yukong.jpg"
            },
            {
                "name" : "Groza",
                "position" : "Head of Operations",
                "file-name" : "groza.png"
            },
            {
                "name" : "Moanin",
                "position" : "Co-Founder & Head of IT",
                "file-name" : "tom-1.jpg"
            },
            {
                "name" : "Harmless Wind",
                "position" : "Executive Advisor",
                "file-name" : "tom-2.jpg"
            }
        ]
    },
    {
        "division" : "app-leaders",
        "members" : [
            {
                "name" : "Solaris",
                "position" : "Hiku Lead & Gacha Expert",
                "file-name" : "solaris.webp"
            },
            {
                "name" : "Kyubey 57",
                "position" : "Tsunagu Lead & Guide Creator",
                "file-name" : "kyubey57.jpg"
            },
            {
                "name" : "Guinafen",
                "position" : "Asobu Lead & Pro Streamer",
                "file-name" : "guinafen.png"
            },
            {
                "name" : "Serval",
                "position" : "Kiku Lead & Music Engineer",
                "file-name" : "serval.webp"
            },
            {
                "name" : "Hifumi",
                "position" : "Kau Lead & Merch Expert",
                "file-name" : "hifumi.png"
            },
            {
                "name" : "Bucko",
                "position" : "Iku Lead & Cosplay Expert",
                "file-name" : "bucko.png"
            },
            {
                "name" : "Scrandy7",
                "position" : "Kumitateru / Shiru Lead & Dota Pro",
                "file-name" : "scrandy47.jpg"
            },
            {
                "name" : "Mako",
                "position" : "Yomu Lead & Professional Snoozer",
                "file-name" : "mako.webp"
            },
        ]
    },
    {
        "division" : "developers",
        "members" : [
            {
                "name" : "Umiko Ahagon",
                "position" : "Principal Developer",
                "file-name" : "umiko-ahagon.webp"
            },
            {
                "name" : "Aiba Asagi",
                "position" : "Senior Developer",
                "file-name" : "aiba-asagi.webp"
            },
            {
                "name" : "Tsubame Narumi",
                "position" : "Junior Developer",
                "file-name" : "tsubame-narumi.webp"
            },
            {
                "name" : "Nene Sakura",
                "position" : "Junior Developer",
                "file-name" : "nene-sakura.jpeg"
            },
        ]
    },
    {
        "division" : "finance",
        "members" : [
            {
                "name" : "Aventurine",
                "position" : "Director of Asset Management",
                "file-name" : "aventurine.jpg"
            },
            {
                "name" : "Topaz",
                "position" : "Chief Financial Officer",
                "file-name" : "topaz.jpg"
            },
            {
                "name" : "Jade",
                "position" : "Head of Strategic Investments",
                "file-name" : "jade.jpg"
            },
            {
                "name" : "Yuuka",
                "position" : "Lead Accoutant / Assistant",
                "file-name" : "yuuka.png"
            },
        ]
    },
    {
        "division" : "r-and-d",
        "members" : [
            {
                "name" : "THE Herta",
                "position" : "R&D Lead",
                "file-name" : "the-herta.webp"
            },
            {
                "name" : "Herta 1",
                "position" : "R&D assistant",
                "file-name" : "herta.webp"
            },
            {
                "name" : "Herta 2",
                "position" : "R&D assistant",
                "file-name" : "herta.webp"
            },
            {
                "name" : "Herta 3",
                "position" : "R&D assistant",
                "file-name" : "herta.webp"
            },
            {
                "name" : "Screwllum",
                "position" : "Lead AI Researcher",
                "file-name" : "screwllum.jpg"
            },
            {
                "name" : "Ruan Mei",
                "position" : "Lead LLM Developer",
                "file-name" : "ruan-mei.jpg"
            },
            {
                "name" : "Dr. Ratio",
                "position" : "Algorithms Expert",
                "file-name" : "dr-ratio.jpg"
            },
        ]
    }
]

function displayMembers() {
    members.forEach(division => {
        console.log("Members of: ", division.division)
        var container = document.getElementById(division.division).querySelector('.member-list')
        division.members.forEach(member => {
            var member_div = document.createElement("div");
            member_div.classList.add("team-member")

            var image = document.createElement('img')
            image.classList.add('team-member__picture')
            image.src = static_link + division.division + "/" + member["file-name"]

            var name = document.createElement('p');
            name.classList.add('team-member__name');
            name.innerHTML = member.name

            var position = document.createElement('p');
            position.classList.add('team-member__position')
            position.innerHTML = member.position

            member_div.append(image)
            member_div.append(name)
            member_div.append(position)
            container.append(member_div)
            console.log("Adding: ", member.name)
        })
    });
}

displayMembers();

var correctCards = 0;
$(init);

function init() {
  // Hide the success message
  $("#successMessage").hide();
  $("#successMessage").css({
    left: "580px",
    top: "250px",
    width: 0,
    height: 0
  });

  // Reset the game
  correctCards = 0;
  $("#cardPile").html("");
  $("#cardSlots").html("");

  // Create the pile of images
  var numbers = [1, 2, 3, 4, 5, 6, 7];
  var terms = ["1", "2", "3", "4", "5", "6", "7"];

  const images = [
    "images/supervisor.gif",
    "images/co-worker.gif",
    "images/ill-worker.gif",
    "images/physician.gif",
    "images/union-representative.gif",
    "images/insurance-provider.gif",
    "images/professional.gif"
  ];
  const arrayImagesElement = document.getElementById("arrayImages");
  var roles = [
    "Injured/Ill worker",
    "Direct supervisor",
    "Union representative",
    "Physician",
    "Insurance provider",
    "Co-workers",
    "Disability Case Management Professional"
  ];

  function createImageNode(fileName, altText) {
    const img = new Image();
    img.src = fileName;
    img.alt = altText;
    return img;
  }

  for (var i = 0; i < 7; i++) {
    $(
      '<div class="cardImage">' +
        '<div class="roleBox">' +
        roles[i] +
        "</div>" +
        '<img src=" ' +
        images[i] +
        '">' +
        "</div>"
    )
      .data("number", numbers[i])
      .attr("id", "card" + numbers[i])
      .appendTo("#cardPile")
      .draggable({
        stack: "#cardPile div",
        cursor: "move",
        revert: true
      });
  }

  // Create the content

  var priorities = {
    priorities1: `
                    <ul>
                    <li>Recovery</li>
                    <li>Pain/symptom management</li>
                    <li>Ensuring benefits received/paid</li>
                    <li>Ensuring claim continues </li>
                    <li>Communication with all parties: family, doctor, employer, insurer</li>
                    </ul>
                    `,
    priorities2: `
                    <ul>
                    <li>Productivity</li>
                    <li>Replacement of absent worker</li>
                    <li>Training replacement workers</li>
                    <li>Containing costs associated with absence</li>
                    <li>Communication with union, absent worker and co-workers</li>
                    </ul>
                    `,
    priorities3: `
                    <ul>
                    <li>Worker receiving benefits to which they are entitled</li>
                    <li>Advocating for rights of absent worker and co-workers</li>
                    <li>Protecting Collective Agreement</li>
                    <li>Participating in incident investigation to ensure safe workplace</li>
                    </ul>
                    `,
    priorities4: `
                    <ul>
                    <li>Recovery</li>
                    <li>Symptom management</li>
                    <li>Referrals for diagnostic tests or specialists are done in a timely manner</li>
                    <li>Confidentiality of patient’s information</li>
                    <li>Confidentiality of patient’s information</li>
                    </ul>
                    `,
    priorities5: `
                    <ul>
                    <li>Contain costs of claim</li>
                    <li>Validate eligibility for claim</li>
                    <li>Conclude claim quickly</li>
                    </ul>
                    `,
    priorities6: `
                    <ul>
                    <li>Doing their own job well</li>
                    <li>Maintaining health and wellness at work</li>
                    <li>Avoiding injury</li>
                    </ul>
                    `,
    priorities7: `
                    <ul>
                    <li>Communicating with all stakeholders on absence duration</li>
                    <li>Communicating with absent worker in a timely and regular manner</li>
                    <li>Ensuring worker receiving appropriate medical treatment</li>
                    <li>Ensuring worker receiving benefits they are entitled to</li>
                    <li>Ensuring worker receiving benefits they are entitled to</li>
                    <li>Understanding the worker’s job and how the job demands might impact return to work efforts</li>
                    <li>Exploring temporary accommodation measures to support return to work</li>
                    </ul>
                    `
  };

  var concerns = {
    concerns1: `
                    <ul>
                    <li>Fear of re-injury</li>
                    <li>Being pushed to return to work before feeling ready</li>
                    <li>Uncertainty with what is happening at work while away</li>
                    <li>Concern with what employer and co-workers think </li>
                    <li>Claim eligibility and continuing to prove need for benefits</li>
                    </ul>
                    `,
    concerns2: `
                    <ul>
                    <li>Creating return to work opportunities</li>
                    <li>Cost of supporting return to work</li>
                    <li>Co-worker complaints</li>
                    <li>Administration time to manage the absent worker’s claim</li>
                    <li>Work slow down or disruption caused by absence and then return to work</li>
                    </ul>
                    `,
    concerns3: `
                    <ul>
                    <li>Ensuring member is paid appropriately and in a timely manner</li>
                    <li>Members being injured</li>
                    <li>Members being re-injured</li>
                    <li>Ensuring overtime, training opportunities are assigned by seniority</li>
                    <li>Members being supported in return to work efforts (supported by management, insurer and co-workers)</li>
                    </ul>
                    `,
    concerns4: `
                    <ul>
                    <li>Seeing the patient for follow up at an appropriate time</li>
                    <li>Understanding the patient’s job and return to work opportunities</li>
                    <li>Completing paperwork in a timely manner</li>
                    <li>Communicating with employer and insurer on claim and return to work</li>
                    <li>Supporting return to work in a timely and appropriate manner</li>
                    </ul>
                    `,
    concerns5: `
                    <ul>
                    <li>Communication with worker</li>
                    <li>Explaining insurance process to worker</li>
                    <li>Obtaining medical documentation to support claim</li>
                    <li>Working with employer, worker and physician on return to work opportunities</li>
                    </ul>
                    `,
    concerns6: `
                    <ul>
                    <li>Working harder because of the absent worker</li>
                    <li>Training for a new job to cover the absence</li>
                    <li>Fear of injury </li>
                    <li>Increased overtime</li>
                    <li>Less recovery time or shortened breaks</li>
                    <li>Doing a job they are not accustomed to</li>
                    <li>Not having their rights violated under the collective agreement</li>
                    </ul>
                    `,
    concerns7: `
                    <ul>
                    <li>Health and wellness of worker – potential for delay in recovery or re-injury</li>
                    <li>Adequate medical intervention starting with correct diagnosis</li>
                    <li>Trust and cooperation of the physician or healthcare team</li>
                    <li>Cooperation and support from insurance provider</li>
                    <li>Understanding worker’s progress in rehabilitation</li>
                    <li>Cooperation with supervisors, union, co-workers on return to work opportunities </li>
                    <li>Managing a large case load</li>
                    <li>Safe and sustainable return to work plans implemented at the right time</li>
                    </ul>
                    `
  };

  var priority = Object.values(priorities);
  var concern = Object.values(concerns);

  for (var i = 1; i <= 7; i++) {
    $(
      '<div class="dropBox">' +
        '<div class="placeholder">' +
        '<div class="placeholderTitle">' +
        "<span>" +
        "Team Member?" +
        "</span>" +
        "</div>" +
        '<img src="images/placeholder.gif">' +
        "</div>" +
        '<span class="contentContainer">' +
        priority[i - 1] +
        concern[i - 1] +
        "</span>" +
        "</div>"
    )
      .data("number", i)
      .appendTo("#cardSlots")
      .droppable({
        accept: "#cardPile div",
        hoverClass: "hovered",
        drop: handleCardDrop
      });
  }
}

function handleCardDrop(event, ui) {
  var slotNumber = $(this).data("number");
  var cardNumber = ui.draggable.data("number");

  // If the card was dropped to the correct slot, make it and the droppable area disappear with css

  if (slotNumber == cardNumber) {
    ui.draggable.addClass("correct");
    ui.draggable.draggable("disable");

    $(this).droppable("disable");
    ui.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top"
    });
    ui.draggable.draggable("option", "revert", false);
    correctCards++;
  }

  // If all the images are correct then display success message

  if (correctCards == 7) {
    $("#successMessage").show();
    $("#successMessage").animate({
      left: "20%",
      top: "90px",
      width: "250px",
      height: "100px",
      opacity: 1
    });
  }
}

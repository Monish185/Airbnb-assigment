export interface AmenityDetail {
  name: string;
  available?: boolean;
}

export interface AmenityGroup {
  category: string;
  items: AmenityDetail[];
}

export const ALL_AMENITIES: AmenityGroup[] = [
  {
    "category": "Bathroom",
    "items": [
      {
        "name": "Hairdryer",
        "available": true
      },
      {
        "name": "Cleaning products",
        "available": true
      },
      {
        "name": "Shampoo",
        "available": true
      },
      {
        "name": "Hot water",
        "available": true
      },
      {
        "name": "Shower gel",
        "available": true
      }
    ]
  },
  {
    "category": "Bedroom and laundry",
    "items": [
      {
        "name": "Washing machine",
        "available": true
      },
      {
        "name": "Hangers",
        "available": true
      },
      {
        "name": "Bed linen",
        "available": true
      },
      {
        "name": "Room-darkening blinds",
        "available": true
      },
      {
        "name": "Essentials (Towels, bed sheets, soap, toilet paper)",
        "available": true
      },
      {
        "name": "Iron",
        "available": true
      },
      {
        "name": "Clothes storage",
        "available": true
      },
      {
        "name": "Cot",
        "available": true
      }
    ]
  },
  {
    "category": "Entertainment",
    "items": [
      {
        "name": "Smart TV with standard cable/satellite",
        "available": true
      },
      {
        "name": "Books and reading material",
        "available": true
      }
    ]
  },
  {
    "category": "Heating and cooling",
    "items": [
      {
        "name": "Air conditioning",
        "available": true
      },
      {
        "name": "Ceiling fan",
        "available": true
      }
    ]
  },
  {
    "category": "Home safety",
    "items": [
      {
        "name": "Exterior security cameras on property",
        "available": true
      },
      {
        "name": "First aid kit",
        "available": true
      },
      {
        "name": "Smoke alarm",
        "available": false
      },
      {
        "name": "Carbon monoxide alarm",
        "available": false
      }
    ]
  },
  {
    "category": "Internet and office",
    "items": [
      {
        "name": "Fast wifi – 50 Mbps",
        "available": true
      },
      {
        "name": "Dedicated workspace",
        "available": true
      }
    ]
  },
  {
    "category": "Kitchen and dining",
    "items": [
      {
        "name": "Kitchen (Space where guests can cook their own meals)",
        "available": true
      },
      {
        "name": "Fridge & Freezer",
        "available": true
      },
      {
        "name": "Microwave",
        "available": true
      },
      {
        "name": "Cooking basics (Pots and pans, oil, salt and pepper)",
        "available": true
      },
      {
        "name": "Dishes and silverware",
        "available": true
      },
      {
        "name": "Kettle",
        "available": true
      },
      {
        "name": "Toaster",
        "available": true
      },
      {
        "name": "Blender",
        "available": true
      },
      {
        "name": "Dining table",
        "available": true
      }
    ]
  },
  {
    "category": "Location features",
    "items": [
      {
        "name": "Candolim beach access (Public or shared)",
        "available": true
      },
      {
        "name": "Private entrance",
        "available": true
      },
      {
        "name": "Resort access",
        "available": true
      }
    ]
  },
  {
    "category": "Outdoor",
    "items": [
      {
        "name": "Private jacuzzi / hot tub",
        "available": true
      },
      {
        "name": "Shared outdoor pool (open year-round)",
        "available": true
      },
      {
        "name": "Shared patio or balcony",
        "available": true
      }
    ]
  },
  {
    "category": "Parking and facilities",
    "items": [
      {
        "name": "Free parking on premises",
        "available": true
      },
      {
        "name": "Shared gym on premises",
        "available": true
      },
      {
        "name": "Lift / Elevator in building",
        "available": true
      }
    ]
  },
  {
    "category": "Services",
    "items": [
      {
        "name": "Pets allowed",
        "available": true
      },
      {
        "name": "Self check-in with building staff",
        "available": true
      },
      {
        "name": "Long-term stays allowed (28+ days)",
        "available": true
      },
      {
        "name": "Cleaning available during stay",
        "available": true
      }
    ]
  }
];

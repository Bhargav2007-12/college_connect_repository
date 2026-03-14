import Text "mo:core/Text";
import List "mo:core/List";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  type Advisor = {
    name : Text;
    college : Text;
    branch : Text;
    year : Nat;
    rating : Float;
    sessionPrice : Nat;
  };

  let advisors = List.empty<Advisor>();

  public shared ({ caller }) func initialize() : async () {
    if (advisors.isEmpty()) {
      let sampleAdvisors = [
        {
          name = "Alice";
          college = "Harvard";
          branch = "Computer Science";
          year = 2;
          rating = 4.8;
          sessionPrice = 3000;
        },
        {
          name = "Bob";
          college = "Stanford";
          branch = "Electrical Engineering";
          year = 3;
          rating = 4.5;
          sessionPrice = 2800;
        },
        {
          name = "Carol";
          college = "MIT";
          branch = "Mechanical Engineering";
          year = 1;
          rating = 4.7;
          sessionPrice = 3200;
        },
        {
          name = "Dave";
          college = "UCLA";
          branch = "Physics";
          year = 4;
          rating = 4.6;
          sessionPrice = 2500;
        },
        {
          name = "Eve";
          college = "Oxford";
          branch = "Mathematics";
          year = 2;
          rating = 4.9;
          sessionPrice = 3500;
        },
        {
          name = "Frank";
          college = "Cambridge";
          branch = "Biology";
          year = 3;
          rating = 4.4;
          sessionPrice = 2700;
        },
      ];

      advisors.addAll(sampleAdvisors.values());
    };
  };

  module Advisor {
    public func compare(advisor1 : Advisor, advisor2 : Advisor) : Order.Order {
      Text.compare(advisor1.name, advisor2.name);
    };
  };

  public query ({ caller }) func getAllAdvisors() : async [Advisor] {
    advisors.toArray().sort();
  };

  public query ({ caller }) func searchByCollege(keyword : Text) : async [Advisor] {
    let filtered = advisors.filter(
      func(advisor) {
        advisor.college.contains(#text keyword);
      }
    );
    filtered.toArray().sort();
  };

  public query ({ caller }) func searchByBranch(keyword : Text) : async [Advisor] {
    let filtered = advisors.filter(
      func(advisor) {
        advisor.branch.contains(#text keyword);
      }
    );
    filtered.toArray().sort();
  };

  public shared ({ caller }) func addAdvisor(advisor : Advisor) : async () {
    advisors.add(advisor);
  };
};

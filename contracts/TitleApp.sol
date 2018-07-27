pragma solidity ^0.4.17;

contract TitleApp {
  string title;

  event titleSet(
    string title
  );

  function setTitle(string _title) public {
    title = _title;
    emit titleSet(_title);
  }

  function getTitle() view public returns (string) {
    return title;
  }
}

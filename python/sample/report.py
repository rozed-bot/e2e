"""Summaries of a text."""

from __future__ import annotations

from .words import count_words


def wrap(text: str, width: int) -> list[str]:
    """Split `text` into lines of at most `width` characters, breaking between words."""
    lines: list[str] = []
    line = ""
    for word in text.split():
        if line != "" and len(line) + 1 + len(word) > width:
            lines.append(line)
            line = word
        else:
            line = word if line == "" else f"{line} {word}"
    if line != "":
        lines.append(line)
    return lines


def summarize(text: str) -> str:
    """Summarize `text`: how many words it has."""
    return f"{count_words(text)} words"


def report(text: str, width: int) -> list[str]:
    """The summary of `text`, wrapped to lines of at most `width` characters."""
    return wrap(summarize(text), width)

#!/usr/bin/env python3
"""Install or remove short /dys command aliases where supported."""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COMMAND_MD = ROOT / "commands" / "dys.md"
COMMAND_TOML = ROOT / "commands" / "dys.toml"


def destinations(home: Path) -> list[tuple[Path, Path]]:
    """Return command alias source and destination pairs."""
    return [
        (COMMAND_TOML, home / ".gemini" / "commands" / "dys.toml"),
        (COMMAND_MD, home / ".qwen" / "commands" / "dys.md"),
    ]


def install(home: Path, dry_run: bool) -> None:
    for source, target in destinations(home):
        print(f"install {target}")
        if dry_run:
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, target)


def remove(home: Path, dry_run: bool) -> None:
    for _source, target in destinations(home):
        print(f"remove  {target}")
        if dry_run:
            continue
        target.unlink(missing_ok=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Install short /dys command aliases for i-have-dyslexia.")
    parser.add_argument("--remove", action="store_true", help="remove aliases instead of installing them")
    parser.add_argument("--dry-run", action="store_true", help="show changes without writing files")
    parser.add_argument("--home", type=Path, default=Path.home(), help=argparse.SUPPRESS)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    home = args.home.expanduser().resolve()
    if args.remove:
        remove(home, args.dry_run)
    else:
        install(home, args.dry_run)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

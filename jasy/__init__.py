#
# Jasy - Web Tooling Framework
# Copyright 2010-2012 Zynga Inc.
#

__version__ = "0.8-beta5"
__author__ = "Sebastian Werner <info@sebastian-werner.net>"

import os.path
datadir = os.path.join(os.path.dirname(__file__), "data")

def info():
    import jasy.core.Console as Console

    print("Jasy %s is a powerful web tooling framework" % __version__)
    print("Copyright (c) 2010-2012 Zynga Inc. %s" % Console.colorize("http://zynga.com/", "underline"))
    print("Visit %s for details." % Console.colorize("https://github.com/zynga/jasy", "underline"))
    print()


class UserError(Exception):
    """
    Standard Jasy error class raised whenever something happens which the system understands (somehow excepected)
    """
    pass

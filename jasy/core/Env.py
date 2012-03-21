#
# Jasy - Web Tooling Framework
# Copyright 2010-2012 Zynga Inc.
#

import logging, os

# Print out some info
import jasy
logging.info("Jasy %s" % jasy.__version__)
logging.debug("Jasy Path: %s" % os.path.dirname(os.path.abspath(jasy.__file__)))

def startSection(title):
    logging.info("")
    logging.info(">>> %s" % title.upper())
    logging.info("-------------------------------------------------------------------------------")

# Global permutation handling
__permutation = None

def getPermutation():
    global __permutation
    return __permutation

def setPermutation(use):
    global __permutation
    __permutation = use
    
    
# Global prefix handling
__prefix = None

def setPrefix(path):
    global __prefix

    if path is None:
        __prefix = None
        logging.info("Resetting dist folder")
    else:
        __prefix = os.path.normpath(os.path.abspath(os.path.expanduser(path)))
        logging.info("Setting prefix to: %s" % __prefix)
    
def getPrefix():
    global __prefix
    return __prefix
    
def prependPrefix(path):
    global __prefix
    
    if __prefix and not os.path.isabs(path):
        return os.path.join(__prefix, path)
    else:
        return path
        
# Global session object
from jasy.core.Session import Session
session = Session()

# Remote run support
__jasyCommand = None

def setJasyCommand(cmd):
    global __jasyCommand
    print("Setting jasy command to: %s" % cmd)
    __jasyCommand = cmd

def run(project, task, **kwargs):
    print("Running %s of project %s..." % (task, project))
    
    import subprocess
    from jasy.core.Project import getProjectByName

    # Pauses this session to allow sub process fully accessing the same projects
    session.pause()
    
    # Build parameter list from optional arguments
    params = ["--%s=%s" % (key, kwargs[key]) for key in kwargs]
    if not "prefix" in kwargs:
        params.append("--prefix=%s" % __prefix)
    
    args = [__jasyCommand, task] + params
    print("ARGS: ", args)

    # Change into sub folder and execute jasy task
    oldPath = os.getcwd()
    os.chdir(getProjectByName(project).getPath())
    subprocess.call(args)
    os.chdir(oldPath)

    # Resumes this session after sub process was finished
    session.resume()


# Task API for user scripts
from jasy.core.Task import *
from jasy.asset.Asset import * 

# Resolving/Sorting classes
from jasy.js.Resolver import Resolver
from jasy.js.Sorter import Sorter

# API Writer
from jasy.js.api.Writer import ApiWriter

# Output options
from jasy.js.output.Optimization import Optimization
from jasy.js.output.Formatting import Formatting

formatting = Formatting()
optimization = Optimization("variables", "declarations", "blocks", "privates")

# Import file operation goodies
from jasy.util.File import *

# Import combiner script for merging/write js output
from jasy.js.output.Combiner import *


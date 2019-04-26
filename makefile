# Makefile for map usages
# code taken from cs.swarthmore.edu/~newhall/unixhelp/javamakefiles.html
## Comments:
# To use the above makefile to compile your java programs:
# create a file named 'makefile' in your homework directory with the identical contents
# modify the CLASSES macro so that it has the names of your .java files;
# run 'make', and if all goes well, it should compile all your java source files that need to be re-built.

JFLAGS = -g
JC = javac
.SUFFIXES: .java .class
.java.class:
	$(JC) $(JFLAGS) $*.java

CLASSES = \
	DestNode.java \
	implementation.java \

default: classes

classes: $(CLASSES: .java=.class)

clean:
	$(RM) *.class
